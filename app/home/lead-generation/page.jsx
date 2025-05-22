import React from "react";

import Header from "@/components/home-page/home-13/Header";
import Hero from "@/components/home-page/home-13/hero";
import Feedback from "@/components/home-page/home-13/Feedback";
import Testimonial from "@/components/home-page/home-13/Testimonial";
import Link from "next/link";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Image from "next/image";
import BannerSubscribe from "@/components/home-page/home-2/BannerSubscribe";
import OurMission from "@/components/about/OurMission";
import PortfolioGallery1 from "@/components/portfolio/PortfolioGallery1";
import Partners from "@/components/home-page/home-6/Partners";
import ContactForm from "@/components/home-page/home-9/ContactForm";
export const metadata = {
  title: "Ritmo - Estudio de eventos creativo",
};
const LeadGeneration = () => {
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
        Theme Hero Banner
        ============================================== 
        */}
<Hero />
      {/* /.hero-banner-nine */}
      {/*
        =====================================================
        Feedback Section Eight
        =====================================================
        */}
<Feedback />
{/* /.feedback-section-eight */}
      {/* 
        =============================================
        Feature Section Thirty
        ============================================== 
        */}
<BannerSubscribe  />
{/* <Feature /> */}
      {/* /.fancy-feature-thirty */}

      {/* 
        =============================================
        Feature Section Thirty One
        ============================================== 
        */}


      {/* 
			=============================================
				Feedback Section Ten
			============================================== 
			*/}
      <div id="servicios" className="feedback-section-ten position-relative pt-100 lg-pt-50">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">SERVICIOS</div>
                  <h2 className="main-title  fw-normal tx-dark" style={{fontFamily: 'LT Funk'}}>
                    Descubrí todos nuestros
                    <span className="position-relative">
                      {" "}
                       servicios: <img src="/images/shape/shape_129.svg" alt="" />
                    </span>
                  </h2>
                </div>
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial />
            
            
          </div>
        </div>
        {/* End .container */}

   
      </div>

      
      {/* /.feedback-section-ten */}


      {/* /.fancy-feature-thirtyOne */}

      {/* 
        =============================================
        Feature Section Thirty Two
        ============================================== 
        */}
      {/* <div className="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div className="container">
          <div className="row">
            <FeaturesBlock />
          </div>
        </div>

        <div className="wrapper mt-90 lg-mt-30">
          <div className="container">
            <div className="row">
              <Counter />
            </div>
          </div>
        </div>
      </div> */}

{/*  GALERIA
<div className="fancy-feature-fiftyEight position-relative zn2 pt-40 md-pt-40">
        <div className="container position-relative">
    
          <OurMission />

          <Image
            width={449}
            height={808}
            src="/images/shape/shape_187.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div> */}



      {/* /.fancy-feature-thirtyTwo */}
      {/*
			=====================================================
				Feedback Section Nine
			=====================================================
			*/}
      {/* <div className="feedback-section-nine position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ms-lg-auto" data-aos="fade-left">
              <div className="title-style-ten">
                <div className="sc-title">SUCCESS STORIES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  See success{" "}
                  <span className="position-relative">
                    stories <img src="/images/shape/shape_122.svg" alt="img" />
                  </span>
                  of our customers.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <SuccessStory />
      </div> */}
      {/* /.feedback-section-nine */}


      <PortfolioGallery1 />


      <div id="clientes" className="partner-section-one position-relative mt-100 lg-mt-100">
        <div className="container">
                 <div className="row">
                         <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
                           <div
                             className="title-style-fourteen text-center mb-100 lg-mb-70"
                             data-aos="fade-up"
                           >
                             <div className="sc-title">CLIENTES</div>
                             <h2 className="main-title font-recoleta fw-normal tx-dark">
                               Empresas que{" "}
                               <span className="position-relative">
                                 confiaron{" "}
                                 <Image
                                   width={302}
                                   height={9}
                                   src="/images/shape/shape_186.svg"
                                   alt="shape"
                                 />
                               </span>
                               en nosotros:
                             </h2>
                           </div>
                           {/* /.title-style-fourteen */}
                         </div>
                       </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <Partners />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

  
      </div>
      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      {/* <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                />
              </span>
            </h2>
          </div>

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
            <Faq />
            <Image
              width={65}
              height={66}
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
        Fancy Short Banner Twelve
        =====================================================
        */}
      {/* <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk{" "}
                    <Image
                      width={221}
                      height={7}
                      src="/images/shape/shape_132.svg"
                      alt=""
                    />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                data-aos-delay="300"
                data-aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div> */}

<div className="fancy-short-banner-five mt-110" id="s5">
  <div id="contacto" className="bg-wrapper position-relative pt-180 pb-140 lg-pt-80 lg-pb-80" style={{ background: "rgb(240 255 97 / 86%)" }}>
    <img src="/images/shape/shape_68.svg" alt="shape" className="lazy-img shapes shape-one" />
    <img src="/images/shape/shape_69.svg" alt="shape" className="lazy-img shapes shape-two" />
    <img src="/images/shape/shape_70.svg" alt="shape" className="lazy-img shapes shape-three" />
    <div className="r-shape-one position-absolute" />
    <div className="container">
      <div className="innner-content bg-white position-relative" data-aos="fade-up">
        <div className="r-shape-two rounded-circle position-absolute" />
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="title-xl font-recoleta fw-500 tx-dark">
              ¿Tenés consultas?
              <span
                className="d-inline-block position-relative"
                style={{
                  fontSize: "88px",
                }}
              >
                <span className="contactanos-text">Contactanos.</span>
              </span>
            </h2>
            <p className="text-lg mt-35 md-mt-20">
              Envianos un mensaje y nos contactaremos a la brevedad.
            </p>
          </div>
          <div className="col-lg-6 ms-auto">
            <div className="form-style-one md-mt-40">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
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
                      className="header-logo"
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
    
      </div>
      {/* /.footer-style-nine */}
    </>
  );
};

export default LeadGeneration;
