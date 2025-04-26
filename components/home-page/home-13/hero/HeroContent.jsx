import Link from "next/link";

const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta">
        Damos vida a{" "}
        <span className="position-relative">
          ideas <img src="/images/shape/shape_114.svg" alt="img" />
        </span>{" "}
        que marcan historias.
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30">
        Creamos espacios donde las marcas brillan{" "}
        <span className="text-white">y las personas se conectan</span>.
      </p>
      <div className="d-lg-flex align-items-center">
        <Link
          href="/contact/contact-v1"
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
        >
          <span>Contáctanos</span>
          <img src="/images/icon/icon_91.svg" alt="img" className="ms-3" />
        </Link>
      </div>

    </>
  );
};

export default HeroContent;
