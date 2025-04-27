// components/portfolio/portfolio-details/ProjectDetails.jsx
const ProjectDetails = ({ details }) => {
  if (!details) {
    return null;
  }

  return (
    <>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Fecha</div>
        <div className="pt-text">{details.date || "Sin fecha"}</div>
      </div>

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Cliente</div>
        <div className="pt-text">{details.client || "Sin cliente"}</div>
      </div>

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Categoría</div>
        <div className="pt-text">{details.category || "Sin categoría"}</div>
      </div>
    </>
  );
};

export default ProjectDetails;