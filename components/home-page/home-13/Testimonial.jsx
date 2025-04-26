"use client";

import React from "react";

const serviceData = [
  {
    title: "EVENTOS",
    subtitle: "Producción integral de eventos",
    description: "Nos encargamos de la producción integral de todo tipo de eventos, desde la idea creativa hasta la ejecución final. Lanzamientos, inauguraciones, eventos corporativos, team buildings y más.",
    background: "#5A5BFF",
    bottomText: "Experiencia & Creatividad: 5.00",
  },
  {
    title: "ACTIVACIONES",
    subtitle: "Experiencias que generan conexión",
    description: "Creamos experiencias interactivas que conectan emocionalmente con tu audiencia y dejan huella.",
    background: "#F0FF61",
    bottomText: "Impacto & Engagement: 5.00",
  },
  {
    title: "STANDS",
    subtitle: "Espacios que hacen brillar tu marca",
    description: "Diseñamos espacios atractivos, funcionales y estratégicos para ferias, exposiciones, congresos o centros comerciales. Lugares donde tu marca puede brillar y conectar.",
    background: "#C593FF",
    bottomText: "Diseño & Funcionalidad: 5.00",
  },
  {
    title: "MERCHANDISING",
    subtitle: "Productos que transmiten tu identidad",
    description: "Desarrollamos productos promocionales personalizados que transmiten tu identidad, generan cercanía y hacen que tu marca esté presente en el día a día.",
    background: "#C5DBF2",
    bottomText: "Personalización & Calidad: 5.00",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-grid-wrapper pt-70 lg-pt-40" data-aos="fade-up">
      <div className="testimonial-grid">
        {serviceData.map((service) => (
          <div key={service.title} className="testimonial-card feedback-block-ten" style={{ background: service.background }}>
            <div className="cmp-name fw-500 tx-dark">{service.title}</div>
            <div className="fs-18 tx-dark">{service.subtitle}</div>
            <p className="tx-dark mt-40 mb-70 lg-mt-30 lg-mb-50" style={{fontSize: '22px'}}>{service.description}</p>
            {/* <div className="d-flex align-items-center justify-content-between">
              <div className="fw-500 tx-dark fs-18">{service.bottomText}</div>
              <img src="/images/icon/icon_98.svg" alt="" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
