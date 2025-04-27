"use client";

import Header from "@/components/home-page/home-13/Header";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Página no encontrada || Ritmo Eventos",
};

const NotFound = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* ERROR PAGE CONTENT */}
      <section
        className="error-page-content d-flex align-items-center justify-content-center position-relative"
        style={{
          minHeight: "100vh",
          background: "rgb(240 255 97 / 86%)",
          overflow: "hidden",
          paddingTop: "150px",
          paddingBottom: "150px",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <div className="row">
            <div className="col-xxl-8 col-lg-9 m-auto">
              <h1
                style={{
                  fontFamily: "LT Funk",
                  fontSize: "140px",
                  color: "#5A5BFF",
                }}
              >
                404
              </h1>
              <h2
                className="font-recoleta tx-dark mt-20 mb-30"
                style={{ fontSize: "48px" }}
              >
                Oops! Esta página no existe.
              </h2>
              <p
                className="text-dark fs-20 mb-40"
                style={{ maxWidth: "550px", margin: "0 auto" }}
              >
                Parece que te perdiste en el ritmo.  
                Volvé a la pista principal.
              </p>

              <Link
                href="/"
                className="btn-twentyOne fw-500 tran3s"
                style={{
                  background: "#5A5BFF",
                  padding: "12px 32px",
                  color: "white",
                  fontSize: "18px",
                  borderRadius: "50px",
                  display: "inline-block",
                  transition: "0.3s",
                }}
              >
                Volver al inicio
              </Link>
            </div>
          </div>

          {/* Decorative shape */}
          <Image
            width={800}
            height={500}
            src="/images/assets/ils_06.svg"
            alt="Decorative Illustration"
            className="m-auto mt-60"
          />
        </div>

        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="shape background"
          className="shapes shape-one w-100"
        />
      </section>

      {/* FOOTER */}
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
                      className="header-logo"
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

export default NotFound;
