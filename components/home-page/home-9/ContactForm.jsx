"use client";
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <input
              type="text"
              placeholder="Nombre y apellido"
              name="name"
              required="required"
              data-error="El nombre es obligatorio."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-50">
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              required="required"
              data-error="El email es obligatorio."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Tu mensaje*"
              name="message"
              required="required"
              data-error="El mensaje es obligatorio."
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="send-btn ripple-btn w-100 fw-500 tran3s text-uppercase text-white"
          >
            Enviar mensaje
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default ContactForm;
