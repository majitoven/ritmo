// components/portfolio/PortfolioGalleryCarousel.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        color: "#5A5BFF",
        fontSize: "36px",
        zIndex: 2,
        cursor: "pointer",
        background: "none",
      }}
      onClick={onClick}
    >
      ❮
    </div>
  );
}

/** Custom “Next” arrow component */
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        color: "#5A5BFF",
        fontSize: "36px",
        zIndex: 2,
        cursor: "pointer",
        background: "none",
      }}
      onClick={onClick}
    >
      ❯
    </div>
  );
}

const PortfolioGalleryCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("*");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectList);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const filteredItems =
    filter === "*"
      ? projects.slice(0, 8)
      : projects.slice(0, 8).filter((item) => item.category.includes(filter));

  const sliderSettings = {
    centerMode: true,
    centerPadding: "200px",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { centerPadding: "150px" } },
      { breakpoint: 768, settings: { centerPadding: "100px" } },
      { breakpoint: 520, settings: { centerPadding: "50px" } },
    ],
  };

  return (
    <>
      <div
        id="proyectos"
        className="portfolio-gallery-carousel mt-100 pb-100 pt-100"
        style={{ background: "#1a1a1a" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-70"
                data-aos="fade-up"
              >
                <div className="sc-title">EVENTOS</div>
                <h2
                  className="main-title font-recoleta fw-normal"
                  style={{ color: "white" }}
                >
                  Conocé nuestros{" "}
                  <span className="position-relative">
                    proyectos:{" "}
                    <Image
                      width={302}
                      height={9}
                      src="/images/shape/shape_186.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center">
              <div
                className="spinner-border"
                role="status"
                style={{ color: "#5A5BFF", width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center text-white">
              No hay proyectos disponibles.
            </div>
          ) : (
            <Slider {...sliderSettings}>
              {filteredItems.map((item) => (
                <div key={item.id} className="px-2">
                  <div
                    className="portfolio-block-three position-relative mb-110 lg-mb-90"
                    onClick={() => router.push(`/portfolio/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Single image (no inner gallery) */}
                    <div className="image-container">
                      <Image
                        src={item.mainImage}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                        priority
                      />
                    </div>

                    <div className="meta-data tran3s d-flex align-items-center justify-content-between">
                      <div className="title tran3s d-flex flex-column">
                        <span className="pj-name tran3s fw-500">
                          {item.title}
                        </span>
                        <span className="tag">{item.client}</span>
                      </div>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="fancybox expend-btn font-recoleta tran3s"
                        title="Ver proyecto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        +
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Limit image height */
        .image-container {
          position: relative;
          width: 100%;
          height: 35rem;
          overflow: hidden;
          border-radius: 8px;
        }

        /* Dim & shrink all slides by default */
        :global(.portfolio-gallery-carousel .slick-slide) {
          opacity: 0.5 !important;
          transform: scale(0.8) !important;
          transition: all 0.3s ease !important;
        }

        /* Highlight the centered slide */
        :global(.portfolio-gallery-carousel .slick-center) {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        /* Make arrows clickable and position absolute */
        :global(.portfolio-gallery-carousel .slick-prev),
        :global(.portfolio-gallery-carousel .slick-next) {
          position: absolute !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 40px !important;
          height: 40px !important;
          z-index: 2;
          background: none !important;
          border: none !important;
          outline: none !important;
        }

        /* Position prev arrow on left-center */
        :global(.portfolio-gallery-carousel .slick-prev) {
          left: 15px !important;
        }
        /* Position next arrow on right-center */
        :global(.portfolio-gallery-carousel .slick-next) {
          right: 15px !important;
                    content: "" !important;

        }

        /* Hide default text/icon */
        :global(.portfolio-gallery-carousel .slick-prev:before),
        :global(.portfolio-gallery-carousel .slick-next:before) {
          content: "" !important;
        }

        /* Add thick purple arrows */
        :global(.portfolio-gallery-carousel .slick-prev)::after {
          content: "❮" !important;
          color: #5a5bff;
          font-size: 36px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        :global(.portfolio-gallery-carousel .slick-next)::after {
          content: "❯" !important;
          color: #5a5bff;
          font-size: 36px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Center dots and override external rules */
        :global(.portfolio-gallery-carousel .slick-dots) {
          position: absolute !important;
          width: 100% !important;
          bottom: -25px !important;
          left: 0 !important;
          text-align: center !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }
        :global(.portfolio-gallery-carousel .slick-dots li) {
          display: inline-block !important;
          margin: 0 4px !important;
        }
        :global(.portfolio-gallery-carousel .slick-dots li button) {
          width: 10px !important;
          height: 10px !important;
          padding: 0 !important;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.3) !important;
          border: none !important;
          text-indent: -9999px !important;
          transition: all 0.3s ease-in-out !important;
        }
        :global(
          .portfolio-gallery-carousel .slick-dots li.slick-active button
        ) {
          background: #5a5bff !important;
          transform: scale(1.5) !important;
        }
      `}</style>
    </>
  );
};

export default PortfolioGalleryCarousel;
