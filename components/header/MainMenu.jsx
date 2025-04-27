"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      {/* Mobile button */}
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      {/* Navbar content */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-lg-center">
          {/* Mobile logo */}
          <li className="d-block d-lg-none mb-3 text-center">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/ritmoPalabra.png"
                alt="logo"
                width={160} // Updated width to 160
                height={40} // Updated height to 40
              />
            </Link>
          </li>

          {/* Menu Items */}
          <li className="nav-item">
            <Link href="#hero" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#sobre-nosotros" className="nav-link">
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#servicios" className="nav-link">
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#proyectos" className="nav-link">
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#clientes" className="nav-link">
              Clientes
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#contacto" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="mobile-content d-block d-lg-none mt-4">
          <div className="d-flex flex-column align-items-center">
            <Link
              href="#contacto"
              className="btn-twentyOne fw-500 tran3s"
              style={{
                padding: "10px 25px",
                backgroundColor: "#5A5BFF",
                color: "#fff",
                borderRadius: "30px",
              }}
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;