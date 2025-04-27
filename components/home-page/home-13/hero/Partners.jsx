import React from "react";

const Partners = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {/* Frase 1: Siempre visible */}
      <h3 className="title tx-dark d-flex justify-content-center align-items-center m-3">
        <span className="fw-bold" style={{marginBottom: '10px'}}>Bailemos</span>
        <span className="font-recoleta ms-2">al mismo ritmo</span>
        <span className="ms-3 d-none d-sm-inline-block">
          <img
            src="/images/shape/shape_119.svg"
            alt="shape"
            className="lazy-img"
          />
        </span>
      </h3>

      {/* Frase 2: Solo visible en desktop/tablet */}
      <h3 className="title tx-dark d-none d-md-flex justify-content-center align-items-center m-3">
        <span className="fw-bold" style={{marginBottom: '10px'}}>Bailemos</span>
        <span className="font-recoleta ms-2">al mismo ritmo</span>
        <span className="ms-3 d-none d-sm-inline-block">
          <img
            src="/images/shape/shape_119.svg"
            alt="shape"
            className="lazy-img"
          />
        </span>
      </h3>

      {/* Frase 3: Solo visible en desktop/tablet */}
      <h3 className="title tx-dark d-none d-md-flex justify-content-center align-items-center m-3">
        <span className="fw-bold" style={{marginBottom: '10px'}}>Bailemos</span>
        <span className="font-recoleta ms-2">al mismo ritmo</span>
        <span className="ms-3 d-none d-sm-inline-block">
          <img
            src="/images/shape/shape_119.svg"
            alt="shape"
            className="lazy-img"
          />
        </span>
      </h3>
    </div>
  );
};

export default Partners;
