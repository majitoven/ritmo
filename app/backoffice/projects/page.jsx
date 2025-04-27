// app/backoffice/projects/page.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import ProjectManagement from "@/components/backoffice/ProjectManagement";
import Header from "@/components/home-page/home-13/Header";
import Image from "next/image";
import Link from "next/link";

const BackofficeProjects = () => {
  const router = useRouter();

  // Set the page title dynamically on the client side
  useEffect(() => {
    document.title = "Backoffice Projects || Ritmo - Estudio de eventos creativo";
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/backoffice/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <div
        className="backoffice-projects-section"
        style={{
          minHeight: "100vh",
          background: "rgb(240 255 97 / 86%)",
          paddingTop: "150px",
          paddingBottom: "150px",
        }}
      >
        <ProjectManagement />
        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="Background Shape"
          className="shapes shape-one w-100"
        />
      </div>

      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/ritmoPalabra.png"
                      alt="logo"
                      width={300}
                      height={80}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-auto pt-50 text-center">
          Copyright ©{currentYear} Ritmo Estudio
        </p>
      </div>
    </>
  );
};

export default BackofficeProjects;