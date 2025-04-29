import React from 'react';

const LayoutFooter = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Gabriel Gabrielli. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</a>
          <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</a>
          <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-gray-900'}`}>Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;