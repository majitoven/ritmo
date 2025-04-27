"use client";

import { useState } from "react";
import items from "@/data/portfolio";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PortfolioGallery1 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 8)
      : items.slice(0, 8).filter((item) => item.category.includes(filter));

  return (
    <div id="proyectos" className="portfolio-gallery-three mt-100 pt-100" style={{background: '#1a1a1a'}}>
      <div className="container">
            <div className="row">
                    <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
                      <div
                        className="title-style-fourteen text-center mb-100 lg-mb-70"
                        data-aos="fade-up"
                      >
                        <div className="sc-title">EVENTOS</div>
                        <h2 className="main-title font-recoleta fw-normal" style={{color: 'white'}}>
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
                      {/* /.title-style-fourteen */}
                    </div>
                  </div>
        <div className="row pt-20 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-6 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-three position-relative mb-110 lg-mb-90">
                  <div className="img-meta">
                    <Image
                      width={630}
                      height={500}
                      src={item.image}
                      alt="gallary"
                      className="w-100"
                    />
                  </div>
                  <div className="meta-data tran3s d-flex align-items-center justify-content-between">
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="title tran3s d-flex flex-column"
                    >
                      <span className="pj-name tran3s fw-500">{item.name}</span>
                      <span className="tag">{item.tag}</span>
                    </Link>

                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={630}
                      height={500}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox expend-btn font-recoleta tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          +
                        </span>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery1;
