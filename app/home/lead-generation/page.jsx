import React from "react";

import Header from "@/components/home-page/home-13/Header";
import Hero from "@/components/home-page/home-13/hero";
import Feedback from "@/components/home-page/home-13/Feedback";
import Testimonial from "@/components/home-page/home-13/Testimonial";
import Link from "next/link";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Image from "next/image";
import BannerSubscribe from "@/components/home-page/home-2/BannerSubscribe";
import OurMission from "@/components/about/OurMission";
import PortfolioGallery1 from "@/components/portfolio/PortfolioGallery1";
import Partners from "@/components/home-page/home-6/Partners";
import ContactForm from "@/components/home-page/home-9/ContactForm";

// Removed metadata from here - it should only be in the root component

const LeadGeneration = () => {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ritmo - Estudio de Eventos",
            "description": "Organización de eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay",
            "url": "https://estudioritmo.com",
            "telephone": "+598099489999",
            "email": "hola@estudioritmo.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UY",
              "addressLocality": "Montevideo",
              "addressRegion": "Montevideo"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.9011",
              "longitude": "-56.1645"
            },
            "sameAs": [
              "https://www.instagram.com/ritmo_uy/",
              "https://www.linkedin.com/company/ritmo-eventos/"
            ],
            "serviceType": [
              "Eventos Corporativos",
              "Organización de Bodas",
              "Eventos Sociales",
              "Producción Audiovisual",
              "Wedding Planning",
              "Eventos Empresariales"
            ],
            "areaServed": "Uruguay",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Eventos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Eventos Corporativos",
                    "description": "Organización completa de eventos empresariales y corporativos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Organización de Bodas",
                    "description": "Planificación integral de bodas y ceremonias"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Eventos Sociales",
                    "description": "Organización de celebraciones y eventos sociales"
                  }
                }
              ]
            }
          })
        }}
      />

      <Header />
      <Hero />
      <Feedback />
      
      <div id="sobre-nosotros"></div>
      <BannerSubscribe />

      <div id="servicios" className="feedback-section-ten position-relative pt-100 lg-pt-50">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">SERVICIOS</div>
                  <h2 className="main-title fw-normal tx-dark" style={{fontFamily: 'LT Funk'}}>
                    Descubrí todos nuestros
                    <span className="position-relative">
                      {" "}
                       servicios: <img src="/images/shape/shape_129.svg" alt="" />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
      </div>

      <PortfolioGallery1 />

      <div id="clientes"></div>

      <div className="partner-section-one position-relative mt-100 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
              <div
                className="title-style-fourteen text-center mb-50 lg-mb-70"
                data-aos="fade-up"
              >
                <div className="sc-title">CLIENTES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark" style={{ fontSize: '54px',lineHeight: '1.17em',}}>
                  Empresas que{" "}
                  <span className="position-relative">
                    confiaron{" "}
                    <Image
                      width={302}
                      height={9}
                      src="/images/shape/shape_186.svg"
                      alt="shape"
                    />
                  </span>
                  en nosotros:
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <Partners />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-short-banner-five mt-110" id="s5">
        <div id="contacto" className="bg-wrapper position-relative pt-180 pb-140 lg-pt-80 lg-pb-80" style={{ background: "rgb(240 255 97 / 86%)" }}>
          <div className="r-shape-one position-absolute" />
          <div className="container">
            <div className="innner-content bg-white position-relative" data-aos="fade-up">
              <div className="r-shape-two rounded-circle position-absolute" />
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="title-xl font-recoleta fw-500 tx-dark" style={{ fontSize: '54px',lineHeight: '1.17em',}}>
                    ¿Tenés consultas?
                    <span
                      className="d-inline-block position-relative"
                      style={{
                        fontSize: "54px",
                      }}
                    >
                      <span className="contactanos-text" style={{
                        fontSize: "54px",
                      }}>Contactanos.</span>
                    </span>
                  </h2>
                  <p className="text-lg mt-35 md-mt-20" style={{
                    fontSize: "20px",
                  }}>
                    Envianos un mensaje y nos contactaremos a la brevedad.
                  </p>
                </div>
                <div className="col-lg-6 ms-auto">
                  <div className="form-style-one md-mt-40">
                    <ContactForm />
                  </div>
                </div>
              </div>
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
                      className="header-logo"
                      alt="logo"
                      width={300}
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
      </div>
    </>
  );
};

export default LeadGeneration;