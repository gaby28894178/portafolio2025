import React from 'react';

const HeroSection = ({ darkMode }) => {
  const handleDownloadCV = () => {
    const fileUrl = '/cv.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Gabrie_Gabrielli_Modelo_Harvard.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center pt-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-500">
            <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <span className="text-4xl"><img src='/img/cv.png' alt="Foto de perfil" /></span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gabriel Gabrielli</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-500">Full Stack Developer</h3>
          <p className="text-lg mb-6">
            Desarrollador apasionado por crear soluciones innovadoras y eficientes. 
            Especializado en tecnologías modernas con enfoque en calidad y experiencia de usuario.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Botón de Contacto con SVG */}
            <a 
              href="mailto:gabgabrielli@gmail.com" 
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contáctame
            </a>

            {/* Botón de Habilidades con SVG */}
            <a 
              href="#skills" 
              className={`flex items-center px-6 py-3 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} rounded-lg transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg>
              Mis habilidades
            </a>

            {/* Botón de Descarga CV con SVG */}
            <button 
              onClick={handleDownloadCV}
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;