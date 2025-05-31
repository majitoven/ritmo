const HeroGallery = () => {
  return (
    <>
      <div className="col-6" style={{paddingRight: 0,  
      height: '100%',
    display: 'flex',
    alignItems: 'end',
    flexDirection: 'column'
    }}>
        <div className="img-box position-relative img-box-one">
          <img
            style={{ height: "150px", marginRight: '20px', marginTop: '30px' }}
            src="/images/shape/1b.png"
            alt="img"
            className="lazy-img main-img float-image-updown" // Added different float class
          />
        </div>
        <div className="img-box position-relative  img-box-two">
          <img
            style={{ height: "80px",  marginBottom: '-50px'  }}
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
