import React, { useState } from 'react';

const LayoutHeader = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>GabrielliDev</h1>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <nav className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><a href="#about" className={`block py-2 ${darkMode ? 'text-white hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600'}`}>Sobre mí</a></li>
            <li><a href="#skills" className={`block py-2 ${darkMode ? 'text-white hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600'}`}>Habilidades</a></li>
            <li><a href="#proyectos" className={`block py-2 ${darkMode ? 'text-white hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600'}`}>Proyectos</a></li>
            <li><a href="#contact" className={`block py-2 ${darkMode ? 'text-white hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600'}`}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;