const Feedback = () => {
  const images = [
    {
      src: "/images/shape/2b.png",
      alt: "shape",
      className: "lazy-img shapes shape-one rotate-image",
    },
    {
      src: "/images/shape/1b.png",
      alt: "shape",
      className: "lazy-img shapes shape-two rotate-image",
    },
    {
      src: "/images/shape/4b.png",
      alt: "shape",
      className: "lazy-img shapes shape-three rotate-image",
    },
    {
      src: "/images/shape/3b.png",
      alt: "shape",
      className: "lazy-img shapes shape-four rotate-image",
    },
  ];

  return (
    <div
      className="feedback-section-eight position-relative pt-200 pb-30 lg-pt-120"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-11 col-lg-10 col-md-9 m-auto">
            <div className="feedback_slider_eight">
              <div className="item">
                <div className="feedback-block-eight text-center">
                  <p className="font-recoleta tx-dark mt-60 mb-65 lg-mt-40 lg-mb-40" style={{lineHeight: '1.17em',
                    fontSize: "65px",
                  }}>
                    En Ritmo nos mueve <span style={{color: '#5A5BFF'}}>la creatividad, la autenticidad y el deseo</span> de generar vínculos reales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
      {images.map((image, index) => (
        <img
        style={{height: '120px'}}
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}
    </div>
  );
};

export default Feedback;
