import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Por favor completa todos los campos requeridos' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      //Estos valores son de EmailJs (los deberas poner en tu .env cuando subas el proyecto)
      const serviceID = 'service_u81nqtk'; 
      const templateID = 'template_l146j9m';
      const publicKey = 'HlVIRa9JaVVEQDeXf'; 

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Angel Caiza',
          subject: formData.subject || 'Mensaje desde tu portafolio',
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({ 
        success: true, 
        message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Contacto</h2>
        <p className="text-center mb-12 text-lg">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition`}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition`}
                  placeholder="Tu email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition`}
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition`}
                  placeholder="Tu mensaje"
                  required
                ></textarea>
              </div>
              {submitStatus.message && (
                <div className={`p-3 rounded-lg text-center ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`!rounded-button whitespace-nowrap w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
          <div>
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} h-full`}>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <ContactoInfoItem icon="fas fa-map-marker-alt" title="Ubicación" text="Ambato, Ecuador" />
                <ContactoInfoItem icon="fas fa-envelope" title="Email" text="acaiza0272@gmail.com" />
                <ContactoInfoItem icon="fas fa-phone" title="Teléfono" text="+593 967329710" />
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Sígueme en</h4>
                <div className="flex space-x-4">
                  <SocialIcon href="https://github.com/AngelCaiza" icon="fab fa-github" />
                  <SocialIcon href="https://www.linkedin.com/in/angel-gabriel-caiza-llanganate-93a671369/" icon="fab fa-linkedin-in" />
                  <SocialIcon href="https://www.instagram.com/angelgcaiza/" icon="fab fa-instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactoInfoItem = ({ icon, title, text }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-white">
      <i className={icon + " text-xl"}></i>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white hover:bg-green-500 transition-colors cursor-pointer"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon}></i>
  </a>
);

export default ContactForm;
