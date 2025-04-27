const HeroGallery = () => {
  return (
    <>
      <div className="col-6">
        <div className="img-box position-relative mt-35 img-box-one">
          <img
            src="/images/shape/1.png"
            alt="img"
            className="lazy-img main-img float-image-updown" // Added different float class
          />
          <img
            src="/images/shape/shape_115.svg"
            alt="img"
            className="lazy-img shapes shape-one float-image-leftright" // Different float class
          />
        </div>
        <div className="img-box position-relative mt-35 img-box-two">
          <img
            src="/images/shape/2.png"
            alt="img"
            className="lazy-img main-img float-image-diagonal" // Added diagonal float class
          />
          <img
            src="/images/shape/shape_118.svg"
            alt="img"
            className="lazy-img shapes shape-four float-image-updown" // Different float class
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-6">
        <div className="img-box position-relative mt-35 img-box-three">
          <img
            src="/images/logo/logoRitmo.png"
            alt="img"
            className="lazy-img main-img float-image-leftright" // Left-right floating class
          />
          <img
            src="/images/shape/shape_116.svg"
            alt="img"
            className="lazy-img shapes shape-two float-image-updown" // Up-down floating class
          />
          <img
            src="/images/shape/shape_117.svg"
            alt="img"
            className="lazy-img shapes shape-three float-image-diagonal" // Diagonal floating class
          />
        </div>
      </div>
    </>
  );
};

export default HeroGallery;
