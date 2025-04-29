import React from 'react';

const ProjectCard = ({ project, darkMode, onViewClick }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="h-48 overflow-hidden">
        <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-300' : 'bg-gray-100'}`}>
          <img className='text-6X1' src={project.emoji} />
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
        <div className="flex space-x-3 mb-3">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ver Demo
          </a>
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex-1 px-4 py-2 text-center rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition-colors`}
          >
            Código Fuente
          </a>
        </div>
        <button
          onClick={onViewClick}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Ver
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
