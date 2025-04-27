// components/backoffice/ProjectManagement.jsx
"use client";

import { useState, useEffect } from "react";
import { db, storage } from "@/firebase/firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/firebase/firebase"; // Ensure auth is imported

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    client: "",
    date: "",
    description: "",
    category: "",
    mainImage: "",
    gallery: [],
  });
  const [mainImageFile, setMainImageFile] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectList);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  // Image optimization (resize and compress)
  const optimizeImage = async (file) => {
    const maxSizeKB = 500; // Max size in KB
    const maxDimension = 1200; // Max width or height

    const img = document.createElement("img");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const loadImage = () => {
      return new Promise((resolve) => {
        img.onload = () => resolve();
        img.src = URL.createObjectURL(file);
      });
    };

    await loadImage();

    let width = img.width;
    let height = img.height;

    // Resize if dimensions exceed max
    if (width > height) {
      if (width > maxDimension) {
        height = Math.round((height * maxDimension) / width);
        width = maxDimension;
      }
    } else {
      if (height > maxDimension) {
        width = Math.round((width * maxDimension) / height);
        height = maxDimension;
      }
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    // Compress to JPEG with quality 0.8
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          const sizeKB = blob.size / 1024;
          if (sizeKB > maxSizeKB) {
            alert(
              "El archivo es demasiado grande incluso después de la compresión. Por favor, subí una imagen más pequeña."
            );
            resolve(null);
          } else {
            resolve(blob);
          }
        },
        "image/jpeg",
        0.8
      );
    });
  };

  // Handle image upload (for both main image and gallery)
  const handleImageUpload = async (file) => {
    if (!file) return null;

    const optimizedImage = await optimizeImage(file);
    if (!optimizedImage) return null;

    const storageRef = ref(storage, `projects/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, optimizedImage);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  // Add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Upload main image if provided
    let mainImageUrl = newProject.mainImage;
    if (mainImageFile) {
      mainImageUrl = await handleImageUpload(mainImageFile);
      if (!mainImageUrl) {
        setLoading(false);
        return;
      }
    }

    // Upload gallery images if provided
    const galleryUrls = [...newProject.gallery];
    if (galleryFiles.length > 0) {
      const uploadedUrls = await Promise.all(
        galleryFiles.map(async (file) => {
          const url = await handleImageUpload(file);
          return url;
        })
      );
      // Filter out any failed uploads (null values)
      galleryUrls.push(...uploadedUrls.filter((url) => url !== null));
    }

    const projectData = {
      ...newProject,
      mainImage: mainImageUrl,
      gallery: galleryUrls,
    };

    if (editingProject) {
      // Update existing project
      const projectRef = doc(db, "projects", editingProject.id);
      await updateDoc(projectRef, projectData);
      setProjects(
        projects.map((p) =>
          p.id === editingProject.id ? { id: editingProject.id, ...projectData } : p
        )
      );
      setEditingProject(null);
    } else {
      // Add new project
      const docRef = await addDoc(collection(db, "projects"), projectData);
      setProjects([...projects, { id: docRef.id, ...projectData }]);
    }

    setNewProject({
      title: "",
      client: "",
      date: "",
      description: "",
      category: "",
      mainImage: "",
      gallery: [],
    });
    setMainImageFile(null);
    setGalleryFiles([]);
    setLoading(false);
  };

  // Delete project
  const handleDelete = async (id) => {
    setLoading(true);
    await deleteDoc(doc(db, "projects", id));
    setProjects(projects.filter((p) => p.id !== id));
    setLoading(false);
  };

  // Edit project
  const handleEdit = (project) => {
    setEditingProject(project);
    setNewProject(project);
    setMainImageFile(null);
    setGalleryFiles([]);
  };

  // Logout
  const handleLogout = async () => {
    await auth.signOut();
    router.push("/backoffice/login");
  };

  return (
    <div className="container" style={{ padding: "50px 20px" }}>
      <div className="d-flex justify-content-between align-items-center mb-40">
        <h2
          className="font-recoleta tx-dark"
          style={{ fontSize: "48px", color: "#5A5BFF" }}
        >
          Gestionar Proyectos
        </h2>
        <button
          onClick={handleLogout}
          className="btn-twentyOne fw-500 tran3s"
          style={{
            background: "#5A5BFF",
            padding: "10px 20px",
            color: "white",
            fontSize: "16px",
            borderRadius: "50px",
            border: "none",
          }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Form to Add/Edit Project */}
      <form onSubmit={handleSubmit} className="mb-50">
        <div className="row">
          <div className="col-md-6 mb-30">
            <label>Título del Proyecto</label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              placeholder="Título del proyecto"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>
          <div className="col-md-6 mb-30">
            <label>Cliente</label>
            <input
              type="text"
              value={newProject.client}
              onChange={(e) =>
                setNewProject({ ...newProject, client: e.target.value })
              }
              placeholder="Nombre del cliente"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>
          <div className="col-md-6 mb-30">
            <label>Fecha</label>
            <input
              type="date"
              value={newProject.date}
              onChange={(e) =>
                setNewProject({ ...newProject, date: e.target.value })
              }
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>
          <div className="col-md-6 mb-30">
            <label>Categoría</label>
            <input
              type="text"
              value={newProject.category}
              onChange={(e) =>
                setNewProject({ ...newProject, category: e.target.value })
              }
              placeholder="Categoría (ej. event)"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>
          <div className="col-12 mb-30">
            <label>Descripción</label>
            <textarea
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              placeholder="Descripción del proyecto"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
                minHeight: "100px",
              }}
            />
          </div>
          <div className="col-md-6 mb-30">
            <label>Imagen Principal</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setMainImageFile(e.target.files[0])}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            {newProject.mainImage && (
              <Image
                src={newProject.mainImage}
                alt="Main Image Preview"
                width={100}
                height={100}
                style={{ marginTop: "10px", borderRadius: "8px" }}
              />
            )}
          </div>
          <div className="col-md-6 mb-30">
            <label>Galería de Imágenes</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setGalleryFiles(Array.from(e.target.files))}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            {newProject.gallery.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mt-3">
                {newProject.gallery.map((url, index) => (
                  <div key={index} className="position-relative">
                    <Image
                      src={url}
                      alt={`Gallery Image ${index + 1}`}
                      width={100}
                      height={100}
                      style={{ borderRadius: "8px" }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setNewProject({
                          ...newProject,
                          gallery: newProject.gallery.filter((_, i) => i !== index),
                        })
                      }
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "#ff4d4d",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn-twentyOne fw-500 tran3s"
              style={{
                background: "#5A5BFF",
                padding: "12px 32px",
                color: "white",
                fontSize: "18px",
                borderRadius: "50px",
                border: "none",
              }}
              disabled={loading}
            >
              {editingProject ? "Actualizar Proyecto" : "Agregar Proyecto"}
            </button>
            {editingProject && (
              <button
                type="button"
                onClick={() => {
                  setEditingProject(null);
                  setNewProject({
                    title: "",
                    client: "",
                    date: "",
                    description: "",
                    category: "",
                    mainImage: "",
                    gallery: [],
                  });
                  setMainImageFile(null);
                  setGalleryFiles([]);
                }}
                className="btn-twentyOne fw-500 tran3s ms-3"
                style={{
                  background: "#ff4d4d",
                  padding: "12px 32px",
                  color: "white",
                  fontSize: "18px",
                  borderRadius: "50px",
                  border: "none",
                }}
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Project List */}
      <h3 className="font-recoleta tx-dark mb-30" style={{ fontSize: "36px" }}>
        Proyectos Existentes
      </h3>
      {loading ? (
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#5A5BFF", width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : projects.length === 0 ? (
        <p>No hay proyectos aún.</p>
      ) : (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-30">
              <div
                className="card p-3"
                style={{
                  background: "#f8f9fa",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  width={300}
                  height={200}
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                />
                <h4 className="mt-3">{project.title}</h4>
                <p>Cliente: {project.client}</p>
                <p>Fecha: {project.date}</p>
                <p>Categoría: {project.category}</p>
                <p>Descripción: {project.description}</p>
                <p>Galería: {project.gallery.length} imágenes</p>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="btn-twentyOne fw-500 tran3s"
                    style={{
                      background: "#5A5BFF",
                      padding: "8px 16px",
                      color: "white",
                      fontSize: "14px",
                      borderRadius: "50px",
                      border: "none",
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="btn-twentyOne fw-500 tran3s"
                    style={{
                      background: "#ff4d4d",
                      padding: "8px 16px",
                      color: "white",
                      fontSize: "14px",
                      borderRadius: "50px",
                      border: "none",
                    }}
                    disabled={loading}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;