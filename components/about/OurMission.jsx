"use client";

import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-sm-6">
          <div className="img-meta position-relative mb-50">
            <Image
              width={648}
              height={436}
              style={{ objectFit: "cover" }}
              src="/images/media/gallery/1.png"
              alt="media"
              className="lazy-img w-100"
            />
          </div>
        </div>

        <div className="col-md-6 order-md-first" data-aos="fade-right">
          <div className="row align-items-end">
            <div className="col-sm-6">
              <div className="img-meta mb-50 lg-mb-40">
                <Image
                  width={312}
                  height={332}
                  style={{ objectFit: "cover" }}
                  src="/images/media/gallery/3.png"
                  alt="media"
                  className="lazy-img w-100"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="img-meta position-relative mb-50 lg-mb-40">
                <Image
                  width={312}
                  height={403}
                  style={{ objectFit: "cover" }}
                  src="/images/media/gallery/5.png"
                  alt="media"
                  className="lazy-img w-100"
                />
                {/* Replacing rating block with an image */}
                <div
                  className="rating d-flex flex-column align-items-center justify-content-center rotate-image"
                  data-aos="fade-up"
                  style={{ background: "transparent", width: 150, height: 150  }}
                >
                  <Image
                    width={200}
                    height={200}
                    src="/images/shape/1b.png"
                    alt="Rating Shape"
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="row justify-content-end" data-aos="fade-up">
        <div className="col-sm-4">
          <div className="img-meta mb-50 lg-mb-40">
            <Image
               width={648}
               height={436}
              style={{ objectFit: "cover" }}
              src="/images/media/gallery/4.png"
              alt="media"
              className="lazy-img w-100"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="img-meta position-relative">
            <Image
              width={648}
              height={436}
              style={{ objectFit: "cover" }}
              src="/images/media/gallery/2.png"
              alt="media"
              className="lazy-img w-100"
            />
            {/* Replacing customer-data block with another image */}
            <div
              className="customer-data d-flex flex-column align-items-center justify-content-center rotate-image"
              data-aos="fade-up"
              style={{ background: "transparent", width: 150, height: 150  }}
              >
              <Image
                width={200}
                height={200}
                src="/images/shape/2b.png"
                alt="Customer Shape"
                className="lazy-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
