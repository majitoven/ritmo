"use client";

import React from "react";

const serviceData = [
  {
    title: "Eventos",
    subtitle: "Producción integral de eventos",
    description:
      "Nos encargamos de la producción integral de todo tipo de eventos, desde la idea creativa hasta la ejecución final. Lanzamientos, inauguraciones, eventos corporativos, team buildings y más.",
    background: "#5A5BFF",
    subtitleBg: "#D97532", // Orange
  },
  {
    title: "Activaciones",
    subtitle: "Experiencias que generan conexión",
    description:
      "Desarrollamos acciones estratégicas, creativas y de alto impacto que aumentan la visibilidad, potencian la marca y fortalecen el vínculo con el consumidor.",
    background: "#F0FF61",
    subtitleBg: "#C593FF", // Light Purple
  },
  {
    title: "Stands",
    subtitle: "Espacios que hacen brillar tu marca",
    description:
      "Creamos espacios atractivos, funcionales y estratégicos para ferias, exposiciones, congresos o centros comerciales. Lugares donde tu marca puede brillar y conectar con su público objetivo.",
    background: "#C593FF",
    subtitleBg: "#C5DBF2", // Light Blue
  },
  {
    title: "Merchandising",
    subtitle: "Productos que transmiten tu identidad",
    description:
      "Diseñamos productos personalizados que transmiten tu identidad, generan cercanía y hacen que tu marca esté presente en el día a día.",
    background: "#C5DBF2",
    subtitleBg: "#F0FF61", // Neon Yellow
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-grid-wrapper pt-70 lg-pt-40" data-aos="fade-up">
      <div className="testimonial-grid">
        {serviceData.map((service) => (
          <div
            key={service.title}
            className="testimonial-card feedback-block-ten"
            style={{ background: service.background }}
          >
            <div
              className="cmp-name fw-500 tx-dark"
              style={{
                fontFamily: "LT Funk",
                letterSpacing: "2px",
                fontSize: "50px",
              }}
            >
              {service.title}
            </div>

            {/* SUBTITLE */}
            {/* <div
              className="subtitle-block mt-15 mb-20"
              style={{
                fontFamily: "LT Funk",
                fontSize: "28px",
                backgroundColor: service.subtitleBg,
                padding: "2px 7px",
                borderRadius: "8px",
                display: "inline-block",
                color: "#000",
                width: 'fit-content'
              }}
            >
              {service.subtitle}
            </div> */}

            <p
              className="tx-dark mb-20 lg-mt-20 lg-mb-20"
              style={{ fontSize: "20px" }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
