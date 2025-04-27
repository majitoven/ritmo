import Form from "./Form";

const BannerSubscribe = () => {
  return (
    <div className="fancy-short-banner-nine lg-pt-80" data-aos="fade-up" style={{background: '#fafafa', paddingTop: '80px'}}>
      <div className="bg-wrapper position-relative pt-90 pb-110 lg-pt-50 lg-pb-60">
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="title mb-40">
                <h6 className="fw-normal text-uppercase tx-dark" style={{fontSize: '20px'}}>
                  LA EMPRESA
                </h6>
                <h2 className="m0 fw-bold tx-dark" style={{fontFamily: 'Kiera', letterSpacing: '2px', fontSize: '70px'}}>
                  ¿QUIÉNES SOMOS?
                </h2>
                <h3 className="mt-10 fw-bold tx-dark">
                  Somos un estudio de eventos creativos.
                </h3>
              </div>
              <p className="m0 tx-dark fs-20 lh-lg">
                En Ritmo diseñamos experiencias que conectan <strong>marcas con personas.</strong> Cada proyecto refleja la <strong>esencia</strong> de la marca y potencia su identidad.
                Nos mueve la <strong>creatividad, la autenticidad</strong> y el deseo de generar <strong>vínculos reales.</strong> Desde la idea hasta la ejecución, cuidamos cada detalle para lograr <strong>experiencias completas, memorables y de impacto positivo.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSubscribe;
