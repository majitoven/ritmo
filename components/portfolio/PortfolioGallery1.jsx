// components/portfolio/PortfolioGallery1.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

const PortfolioGallery1 = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("*");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  const filteredItems =
    filter === "*"
      ? projects.slice(0, 8)
      : projects.slice(0, 8).filter((item) => item.category.includes(filter));

  return (
    <div id="proyectos" className="portfolio-gallery-three mt-100 pt-100" style={{ background: "#1a1a1a" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
            <div className="title-style-fourteen text-center mb-100 lg-mb-70" data-aos="fade-up">
              <div className="sc-title">EVENTOS</div>
              <h2 className="main-title font-recoleta fw-normal" style={{ color: "white" }}>
                Conocé nuestros{' '}
                <span className="position-relative">
                  proyectos:{' '}
                  <Image
                    width={302}
                    height={9}
                    src="/images/shape/shape_186.svg"
                    alt="shape"
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status" style={{ color: "#5A5BFF", width: "3rem", height: "3rem" }}>
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center text-white">No hay proyectos disponibles.</div>
        ) : (
          <div className="row pt-20 lg-pt-50">
            {filteredItems.map((item) => (
              <div key={item.id} className={`col-lg-6 col-md-6 ${item.category}`}>                
                {/* Wrap entire card in click handler */}
                <div
                  className="portfolio-block-three position-relative mb-110 lg-mb-90"
                  onClick={() => router.push(`/portfolio/${item.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Carousel inside each project card without auto-start */}
                  <div id={`carousel-${item.id}`} className="carousel slide">
                    <div className="carousel-inner">
                      {[item.mainImage, ...(item.gallery || [])].map((imgUrl, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                          <div className="img-meta" style={{ position: 'relative', paddingTop: '79.37%' }}>
                            <Image
                              src={imgUrl}
                              alt={`${item.title} image ${idx + 1}`}
                              fill
                              style={{ objectFit: 'cover', borderRadius: '8px' }}
                              priority
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${item.id}`}
                      data-bs-slide="prev"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        style={{
                          filter: 'none',
                          backgroundColor: '#5A5BFF',
                          width: '1.6rem',
                          height: '1.6rem',
                          borderRadius: '50%'
                        }}
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${item.id}`}
                      data-bs-slide="next"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        style={{
                          filter: 'none',
                          backgroundColor: '#5A5BFF',
                          width: '1.6rem',
                          height: '1.6rem',
                          borderRadius: '50%'
                        }}
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                  <div className="meta-data tran3s d-flex align-items-center justify-content-between">
                    {/* Title remains non-clickable since whole card is clickable */}
                    <div className="title tran3s d-flex flex-column">
                      <span className="pj-name tran3s fw-500">{item.title}</span>
                      <span className="tag">{item.client}</span>
                    </div>

                    {/* Project link button still navigates correctly */}
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="fancybox expend-btn font-recoleta tran3s"
                      title="Ver proyecto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      +
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery1;
