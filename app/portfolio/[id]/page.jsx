import Header from "@/components/home-page/home-13/Header";
import DefaultFooter from "@/components/footer/DefaultFooter";
import SocialShare from "@/components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "@/components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "@/components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "@/components/portfolio/CallToAction";
import PortfolioGallery from "@/components/portfolio/portfolio-details/PortfolioGallery";

import portfolioData from "@/data/portfolio";
import PortfolioDetailsTitle from "@/components/portfolio/portfolio-details/PortfolioDetailsTitle";
import Link from "next/link";
import Image from "next/image";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
export const metadata = {
  title:
    "Portfolio Details || Jano - Creative Multipurpose React NextJS Template",
};
const DynamicPortfolioDetails = ({ params }) => {
  const id = params.id;
  const portfolio =
    portfolioData.find((item) => item.id == id) || portfolioData[0];

  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioDetailsTitle portfolio={portfolio} />

      {/* 
			=============================================
				Portfolio Details Two
			============================================== 
			*/}
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} />
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
     
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                  {/* End .row */}

                </div>
              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}

            <div className="col-xl-9  mt-120 lg-mt-80">
              <div
                className="title-style-twelve mb-45 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Descripción
                </div>
                <h2 className="main-title fw-500 tx-dark">Acerca del evento</h2>
              </div>
              {/* /.title-style-twelve */}
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullaum laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit volupta velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p data-aos="fade-up">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum magna quis
                nostured.
              </p>

              <div className="row">
                <PortfolioGallery />
              </div>

            </div>
            {/* End col-xl-9 */}

            <div className="project-pagination m-auto pt-100 lg-pt-50 sm-pt-10">
              <div className="row gx-xxl-5">
                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative zn2 mt-20"
                    data-aos="fade-right"
                  >
                    <img
                      src="/images/media/img_92.jpg"
                      alt="media"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Anterior
                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-left" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}

                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative zn2 mt-20"
                    data-aos="fade-left"
                  >
                    <img
                      src="/images/media/img_93.jpg"
                      alt="media"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Ver siguiente
                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
          <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/ritmoPalabra.png"
                      alt="logo"
                      width={300}
                      height={80}
                    />
                  </Link>
                </div>
              </div>
              <FooterContent />


            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

        <CopyrightFooter />

        <div className="shapes shape-one" />
        <Image
          width={84}
          height={104}
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
    </>
  );
};

export default DynamicPortfolioDetails;
