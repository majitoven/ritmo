"use client";

import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-seven white-vr ${
        navbar ? "fixed" : ""
      }`}
      style={{background: '#1a1a1a'}}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/ritmoPalabra.png"
                alt="logo"
                className="header-logo"
                width={200}
                height={50}
              />
            </Link>
          </div>

          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">


            {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/company/ritmo-eventos/"
              target="_blank"
              rel="noopener noreferrer"
              className="login-btn-two fw-500 d-flex align-items-center me-3 fs-4"
            >
              <i className="fab fa-linkedin" />
            </a>

            {/* Instagram icon */}
            <a
              href="https://www.instagram.com/ritmo_uy/"
              target="_blank"
              rel="noopener noreferrer"
              className="login-btn-two fw-500 d-flex align-items-center me-3 fs-4"
            >
              <i className="fab fa-instagram" />
              <span style={{fontSize:'16px', marginLeft: '5px'}}>@ritmo_uy</span>
            </a>
            {/* Email button */}
            <a
              href="mailto:hola@estudioritmo.com"
              className="signup-btn-two fw-500 tran3s d-none d-lg-block"
            >
              hola@estudioritmo.com
            </a>
          </div>

          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
