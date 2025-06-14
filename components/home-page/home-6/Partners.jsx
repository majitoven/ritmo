"use client";

import React from "react";

const Partners = () => {
  const partnersData = [
    {
      imgSrc: "/images/clientes/1.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "100",
    },
    {
      imgSrc: "/images/clientes/10.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "200",
    },
    {
      imgSrc: "/images/clientes/3.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "300",
    },
    {
      imgSrc: "/images/clientes/4.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "400",
    },
    {
      imgSrc: "/images/clientes/5.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "500",
    },
    {
      imgSrc: "/images/clientes/6.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-4 col-lg-2 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "600",
    },
    {
      imgSrc: "/images/clientes/7.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "700",
    },
    {
      imgSrc: "/images/clientes/8.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-3 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "800",
    },
    {
      imgSrc: "/images/clientes/9.png",
      imgAlt: "logo",
      link: "#",
      colClasses: "col-xl-3 col-lg-12 col-md-4 col-6 m-auto",
      dataAos: "fade",
      dataAosDelay: "900",
    },

  ];

  return (
    <div className="row">
      {partnersData.map((partner, index) => (
        <div
          key={index}
          className={partner.colClasses}
          data-aos={partner.dataAos}
          data-aos-delay={partner.dataAosDelay}
        >
          <div
            className="img-box d-flex align-items-center justify-content-center"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "none !important",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <a href={partner.link}>
              <img
                src={partner.imgSrc}
                alt={partner.imgAlt}
                className="lazy-img"
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Partners;
