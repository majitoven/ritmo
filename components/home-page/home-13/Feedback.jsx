const Feedback = () => {
  const images = [
    {
      src: "/images/shape/1_alt.png",
      alt: "shape",
      className: "lazy-img shapes shape-one rotate-image",
    },
    {
      src: "/images/shape/2_alt.png",
      alt: "shape",
      className: "lazy-img shapes shape-two rotate-image",
    },
    {
      src: "/images/shape/3_alt.png",
      alt: "shape",
      className: "lazy-img shapes shape-three rotate-image",
    },
    {
      src: "/images/shape/4.png",
      alt: "shape",
      className: "lazy-img shapes shape-four rotate-image",
    },
    {
      src: "/images/shape/shape_120.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five ",
    },
    {
      src: "/images/shape/shape_121.svg",
      alt: "shape",
      className: "lazy-img shapes shape-six ",
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
                  <p className="font-recoleta tx-dark mt-60 mb-65 lg-mt-40 lg-mb-40">
                    En Ritmo no solo creamos eventos, <span style={{color: '#5A5BFF'}}>creamos momentos</span> que conectan, inspiran y dejan huella.
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
