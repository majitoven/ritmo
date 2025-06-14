// app/portfolio/[id]/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "@/components/home-page/home-13/Header";
import SocialShare from "@/components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "@/components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "@/components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "@/components/portfolio/CallToAction";
import PortfolioGallery from "@/components/portfolio/portfolio-details/PortfolioGallery";
import PortfolioDetailsTitle from "@/components/portfolio/portfolio-details/PortfolioDetailsTitle";
import Link from "next/link";
import Image from "next/image";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";

const DynamicPortfolioDetails = ({ params }) => {
  const { id } = params;
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Set the page title dynamically
  useEffect(() => {
    document.title = portfolio
      ? `${portfolio.title} || Ritmo - Estudio de eventos creativo`
      : "Ritmo - Estudio de eventos creativo";
  }, [portfolio]);

  // Fetch project data from Firestore
  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPortfolio({ id: docSnap.id, ...docSnap.data() });
        } else {
          // Redirect to a 404 page or homepage if project not found
          router.push("/404");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        router.push("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

  if (loading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", background: "#1a1a1a" }}
      >
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#5A5BFF", width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!portfolio) {
    return null; // This won't be reached due to the redirect, but included for safety
  }

  return (
    <>
      <Header />

      <PortfolioDetailsTitle portfolio={portfolio} />

      <div className="portfolio-details-two pt-30 pb-20 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} />
              </div>

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5" style={{paddingLeft: '40px', borderLeft: '4px solid rgb(109, 109, 241)'}}>
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 mt-100 mb-100 lg-mt-80">
              <div
                className="title-style-twelve mb-45 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Descripción
                </div>
                <h2 className="main-title fw-500 tx-dark" >Acerca del evento</h2>
              </div>
              <p data-aos="fade-up" style={{fontSize: '20px'}}>{portfolio.description}</p>

              <div className="row">
              <PortfolioGallery mainImage={portfolio.mainImage} gallery={portfolio.gallery} />              </div>
            </div>
          </div>
        </div>
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
                      className="header-logo"
                      height={80}
                    />
                  </Link>
                </div>
              </div>
              <FooterContent />
            </div>
          </div>
        </div>

        <CopyrightFooter />

        <div className="shapes shape-one" />
        <Image
          width={84}
          height={104}
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
    </>
  );
};

export default DynamicPortfolioDetails;