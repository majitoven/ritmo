const HeroGallery = () => {
  return (
    <>
      <div className="col-6" style={{paddingRight: 0}}>
        <div className="img-box position-relative  mt-35 img-box-one">
          <img
            style={{ height: "200px" }}
            src="/images/shape/1b.png"
            alt="img"
            className="lazy-img main-img float-image-updown" // Added different float class
          />
        </div>
        <div className="img-box position-relative mt-35  img-box-two">
          <img
            style={{ height: "200px" }}
            src="/images/shape/2b.png"
            alt="img"
            className="lazy-img main-img float-image-diagonal" // Added diagonal float class
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-6" style={{paddingLeft: 0}}>
        <div className="img-box position-relative mt-35 img-box-three">
          <img
            src="/images/logo/logoRitmo2.png"
            alt="img"
            className="lazy-img main-img float-image-leftright" // Left-right floating class
          />
        </div>
      </div>
    </>
  );
};

export default HeroGallery;
