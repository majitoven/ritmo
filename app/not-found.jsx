"use client";

import Link from "next/link";
import Header from "@/components/home-page/home-13/Header";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Image from "next/image";

export const metadata = {
  title: "404 || Ritmo - Página no encontrada",
};

const NotFound = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* ERROR PAGE */}
      <div
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
                ¡Oops! No encontramos esta página.
              </h2>
              <p
                className="text-dark fs-20 mb-40"
                style={{ maxWidth: "550px", margin: "0 auto" }}
              >
                Parece que te saliste del ritmo.  
                Volvé al inicio para seguir bailando.
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

          {/* Illustration */}
          <Image
            width={800}
            height={500}
            src="/images/assets/ils_06.svg"
            alt="Decorative Illustration"
            className="m-auto mt-60"
          />
        </div>

        {/* Background shape */}
        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="Background Shape"
          className="shapes shape-one w-100"
        />
      </div>

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
