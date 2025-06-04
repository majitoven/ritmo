"use client";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error de conexión. Inténtalo de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row controls">
        {/* Status Messages */}
        {submitStatus && (
          <div className="col-12 mb-3">
            <div 
              className={`alert ${
                submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'
              }`}
              style={{
                padding: '12px',
                borderRadius: '4px',
                backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
              }}
            >
              {submitStatus.message}
            </div>
          </div>
        )}

        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <input
              type="text"
              placeholder="Nombre y apellido"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              data-error="El nombre es obligatorio."
              disabled={isSubmitting}
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-50">
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              data-error="El email es obligatorio."
              disabled={isSubmitting}
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Tu mensaje*"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              data-error="El mensaje es obligatorio."
              disabled={isSubmitting}
              rows="5"
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="send-btn ripple-btn w-100 fw-500 tran3s text-uppercase text-white"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;