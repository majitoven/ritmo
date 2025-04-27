// components/portfolio/portfolio-details/ProjectSlide.jsx
import Image from "next/image";

const ProjectSlide = ({ slide }) => {
  // Combine mainImage with gallery images
  const images = slide?.mainImage
    ? [slide.mainImage, ...(slide?.gallery || [])]
    : slide?.gallery?.length > 0
    ? slide.gallery
    : [];

  if (images.length === 0) {
    return <div>No hay imágenes disponibles para este proyecto.</div>;
  }

  return (
    <div
      id="gallery-carousel"
      className="carousel slide me-xxl-5 md-mb-40"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <Image
              width={824}
              height={654}
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#gallery-carousel"
        data-bs-slide="prev"
      >
        <i className="bi bi-chevron-left"></i>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#gallery-carousel"
        data-bs-slide="next"
      >
        <i className="bi bi-chevron-right"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProjectSlide;