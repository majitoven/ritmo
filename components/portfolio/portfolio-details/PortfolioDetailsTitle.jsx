// components/portfolio/portfolio-details/PortfolioDetailsTitle.jsx
import Image from "next/image";

const PortfolioDetailsTitle = ({ portfolio }) => {
  return (
    <div
      className="fancy-feature-fiftyOne position-relative mt-200"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="title-style-five mb-65 lg-mb-40">
              <div className="sc-title-two fst-italic position-relative">
                {portfolio?.client || "Cliente no especificado"}
              </div>
              <h2
               className="main-title fw-500 tx-dark" style={{fontFamily: 'LT Funk'}}
              >
                {portfolio?.title || "Sin título"}
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PortfolioDetailsTitle;