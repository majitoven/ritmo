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
              src="/images/media/img_100.jpg"
              alt="media"
              className="lazy-img w-100"
            />
            {/* /.customer-data */}
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
                  src="/images/media/img_97.jpg"
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
                  src="/images/media/img_98.jpg"
                  alt="media"
                  className="lazy-img w-100"
                />
                <div
                  className="rating d-flex flex-column align-items-center justify-content-center"
                  data-aos="fade-up"
                  style={{background: '#D97532'}}
                >
                  <div className="font-recoleta tx-dark rating-value"></div>
                  <div className="fs-18 tx-dark"></div>
                </div>
                {/* /.rating */}
              </div>{" "}
              {/* /.img-meta */}
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
              width={424}
              height={295}
              style={{ objectFit: "cover" }}
              src="/images/media/img_99.jpg"
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
              src="/images/media/img_100.jpg"
              alt="media"
              className="lazy-img w-100"
            />
            <div
              className="customer-data d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
              style={{background: '#F0FF61'}}

            >
              <div className="fw-500 tx-dark amount"></div>
              <div className="fs-18 tx-dark"></div>
            </div>{" "}
            {/* /.customer-data */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
