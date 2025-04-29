import React, { useState } from 'react';

const SkillsSection = ({ darkMode }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    { 
      name: 'Python', 
      icon: '/img/py.png', 
      description: 'Lenguaje de programación versátil para múltiples propósitos.',
      features: [
        'Desarrollo de scripts de automatización',
        'Creación de APIs con Flask/Django',
        'Análisis de datos con Pandas/Numpy',
        'Machine Learning con TensorFlow/PyTorch',
        'Web scraping con BeautifulSoup/Scrapy'
      ]
    },
    { 
      name: 'HTML', 
      icon: '/img/html.png', 
      description: 'Lenguaje de marcado para estructurar contenido web.',
      features: [
        'Maquetación semántica con HTML5',
        'Integración con frameworks frontend',
        'Estructuración de formularios',
        'Accesibilidad web',
        'SEO básico'
      ]
    },
    { 
      name: 'CSS', 
      icon: '/img/css.svg', 
      description: 'Lenguaje de estilos para diseño web.',
      features: [
        'Diseños responsivos con Media Queries',
        'Animaciones y transiciones',
        'Flexbox y Grid Layout',
        'Variables CSS',
        'Preprocesadores como SASS'
      ]
    },
    { 
      name: 'Bootstrap', 
      icon: '/img/bs.svg', 
      description: 'Framework CSS para desarrollo rápido de interfaces.',
      features: [
        'Sistema de grid responsivo',
        'Componentes pre-diseñados',
        'Utilidades de espaciado',
        'Personalización con SASS',
        'Integración con JavaScript'
      ]
    },
    { 
      name: 'Tailwind', 
      icon: '/img/tww.png', 
      description: 'Framework CSS utility-first para diseños personalizados.',
      features: [
        'Estilización con clases utilitarias',
        'Diseño responsivo con prefixes',
        'Personalización mediante config',
        'PurgeCSS para optimización',
        'Integración con PostCSS'
      ]
    },
    { 
      name: 'JavaScript', 
      icon: '/img/jss.png', 
      description: 'Lenguaje de programación para interactividad web.',
      features: [
        'Manipulación del DOM',
        'ES6+ features (arrow functions, destructuring)',
        'Async/Await y Promesas',
        'Programación funcional',
        'Validación de formularios'
      ]
    },
    { 
      name: 'React', 
      icon: '/img/react.svg', 
      description: 'Biblioteca JavaScript para interfaces de usuario.',
      features: [
        'Componentes reutilizables',
        'Manejo de estado con Hooks',
        'Context API para estado global',
        'React Router para navegación',
        'Integración con APIs'
      ]
    },
    { 
      name: 'Json', 
      icon: '/img/json1.svg', 
      description: 'Formato ligero de intercambio de datos.',
      features: [
        'Estructuración de datos',
        'Comunicación con APIs REST',
        'Almacenamiento ligero',
        'Serialización/Deserialización',
        'Validación de esquemas'
      ]
    },
    { 
      name: 'Flask', 
      icon: '/img/flask.svg', 
      description: 'Microframework web para Python.',
      features: [
        'Creación de APIs REST',
        'Jinja2 para templates',
        'Extensible con extensiones',
        'Sistema de routing',
        'Integración con bases de datos'
      ]
    },
    { 
      name: 'Node.js', 
      icon: '/img/ndd.png', 
      description: 'Entorno de ejecución para JavaScript en el servidor.',
      features: [
        'Creación de servidores web',
        'Non-blocking I/O',
        'Ecosistema npm',
        'Event-driven architecture',
        'Streams para manejo de datos'
      ]
    },
    { 
      name: 'Express', 
      icon: '/img/exp.png', 
      description: 'Framework web para Node.js.',
      features: [
        'Sistema de routing',
        'Middleware stack',
        'Integración con motores de templates',
        'Manejo de errores',
        'Creación de APIs RESTful'
      ]
    },
    { 
      name: 'Sequelize', 
      icon: '/img/sequelize.svg', 
      description: 'ORM para bases de datos SQL.',
      features: [
        'Modelado de datos',
        'Migrations',
        'Queries complejas',
        'Relaciones entre modelos',
        'Transacciones'
      ]
    },
    { 
      name: 'Java Backend', 
      icon: '/img/java.svg', 
      description: 'Lenguaje para desarrollo backend robusto.',
      features: [
        'Spring Boot framework',
        'Creación de APIs REST',
        'Conexión con bases de datos',
        'Autenticación y autorización',
        'Microservicios'
      ]
    },
    { 
      name: 'Tkinter', 
      icon: '/img/tk.png', 
      description: 'Biblioteca para interfaces gráficas en Python.',
      features: [
        'Creación de ventanas y widgets',
        'Manejo de eventos',
        'Personalización de componentes',
        'Integración con código Python',
        'Aplicaciones de escritorio multiplataforma'
      ]
    },
    { 
      name: 'PostgreSQL', 
      icon: '/img/ps.png', 
      description: 'Sistema de gestión de bases de datos relacional.',
      features: [
        'Diseño de esquemas',
        'Consultas complejas con SQL',
        'Funciones almacenadas',
        'Índices y optimización',
        'Seguridad y roles'
      ]
    },
    { 
      name: 'Sqlite', 
      icon: '/img/sqlite.svg', 
      description: 'Motor de base de datos ligero y embebido.',
      features: [
        'Almacenamiento local',
        'Sin configuración de servidor',
        'Transacciones ACID',
        'Bajo consumo de recursos',
        'Ideal para aplicaciones pequeñas'
      ]
    }
  ];

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mis Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl flex flex-col items-center transition-all hover:scale-105 cursor-pointer ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => openModal(skill)}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`relative rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col items-center">
                <img 
                  src={selectedSkill.icon} 
                  alt={selectedSkill.name} 
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
                <p className="text-center mb-4">{selectedSkill.description}</p>
                
                <div className="w-full">
                  <h4 className="font-semibold mb-2">Lo que puedo hacer con {selectedSkill.name}:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedSkill.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={closeModal}
                  className={`mt-6 px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;