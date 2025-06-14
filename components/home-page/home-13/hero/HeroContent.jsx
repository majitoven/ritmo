import Link from "next/link";

const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta">
        Potenciamos tu {" "}
        <span className="position-relative">
          marca <img src="/images/shape/shape_114.svg" alt="img" />
        </span>{" "}.
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30" style={{fontSize: '23px', fontWeight: 400}}>
      Creamos experiencias que reflejan
        <span className="text-white"> lo que tu marca tiene para contar.</span>
      </p>
      <div className="d-lg-flex align-items-center">
        <Link
          href="#contacto"
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
        >
          <span>Contactanos</span>
          <img src="/images/icon/icon_91.svg" alt="img" className="ms-3" />
        </Link>
      </div>

    </>
  );
};

export default HeroContent;
