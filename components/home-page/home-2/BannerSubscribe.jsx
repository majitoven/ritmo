import Form from "./Form";

const BannerSubscribe = () => {
  return (
    <div
      // id="sobre-nosotros"
      className="fancy-short-banner-nine lg-pt-80"
      data-aos="fade-up"
      style={{ background: "#fafafa", marginTop: '100px', paddingTop: "80px" }}
    >
      <div className="bg-wrapper position-relative pt-90 pb-110 lg-pt-50 lg-pb-60">
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="title mb-20">
                <h2
                  className="m0 fw-bold tx-dark contactanos-text"
                  style={{
                    fontFamily:"LT Funk",
                    letterSpacing: "2px",
                    lineHeight: '1.17em',
                    fontSize: "54px",
                  }}
                >
                  ¿Quiénes somos?
                </h2>
                <h3
                  className="mt-10 fw-bold tx-dark"
                  style={{
                    fontFamily: "LT Funk",
                    fontSize: "28px",
                    background: "#F0FF61",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    display: "inline-block",
                    marginTop: "18px",
                  }}
                >
                  Somos un estudio creativo.
                </h3>
              </div>

              <p className="m0 tx-dark fs-20 lh-lg">
              Creamos puntos de encuentro entre marcas y personas, diseñando experiencias que reflejan su esencia y potencian su identidad.
              </p>
              <p className="m0 tx-dark fs-20 lh-lg">

              <span style={{fontWeight: 900}}>Planificamos, coordinamos y ejecutamos</span> de manera integral todo tipo de acciones. 
             </p>
             <p className="m0 tx-dark fs-20 lh-lg">
             Desde la idea hasta la ejecución, cuidamos cada detalle siendo el socio <br /> confiable para tus proyectos.
   
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSubscribe;
