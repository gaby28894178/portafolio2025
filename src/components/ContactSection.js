import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el envío por defecto

    const form = e.target;
    const formData = new FormData(form);  // Obtener los datos del formulario

    // Usar Fetch para enviar los datos sin salir de la página
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          title: '¡Mensaje Enviado!',
          text: 'Gracias por contactarnos, te responderemos pronto.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        // Limpiar el formulario después de enviarlo
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el mensaje. Por favor inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Entendido'
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema de conexión. Por favor inténtalo de nuevo más tarde.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    });
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formsubmit.co/gabgabrielligabriel@gmail.com" // URL de FormSubmit
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'}`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'}`}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'}`}
                required
              ></textarea>
            </div>
            {/* Campos ocultos necesarios para FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_subject" value="Nuevo mensaje de contacto" />
            <input type="hidden" name="_autoresponse" value="Gracias por tu mensaje. Te responderé lo antes posible." />
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">O contáctame directamente:</p>
            <a 
              href="mailto:gabgabrielligabriel@gmail.com" 
              className={`text-xl font-semibold ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              gabgabrielligabriel@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;