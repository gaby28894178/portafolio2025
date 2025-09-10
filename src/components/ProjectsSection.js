import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const ProjectsSection = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [singleImage, setSingleImage] = useState(null);

  const projects = [
       {
      title: 'Tienda Shop',
      emoji: '/tienda shop/0.jpg',
      imgHover: null,
      gallery: ['/tienda shop/0.jpg','/tienda shop/1.jpg','/tienda shop/2.jpg','/tienda shop/3.jpg','/tienda shop/4.jpg','/tienda shop/5.jpg'],
      description: 'Plataforma de shopin.',
      demoUrl: 'https://trae3pmmio629m-gaby28894178-gabriels-projects-ddae2e36.vercel.app/',
      codeUrl: 'https://github.com/gaby28894178/3pm-mio-ecommerce.git'
    },
    {
      title: 'GymPro',
      emoji: '/gym/img1.png',
      imgHover: null,
      gallery: ['/gym/img1.png', '/gym/img2.png', '/gym/img5.png', '/gym/img4.png', '/gym/img5.png'],
      description: 'Plataforma de gestión de membresías, clases y entrenadores para gimnasios.',
      demoUrl: 'https://eloquent-dieffenbachia-b94ef9.netlify.app/',
      codeUrl: 'https://github.com/gaby28894178/Gym_Pro.git'
    },
    {
      title: 'App del Clima',
      emoji: '/clima/clima.png',
      imgHover: '/clima/clima2.png',
      gallery: ['/clima/clima.png', '/clima/clima4.png', '/clima/clima3.png'],
      description: 'Aplicación de pronóstico del tiempo con API en tiempo real y búsqueda por ubicación.',
      demoUrl: 'https://climagaby.netlify.app/',
      codeUrl: 'https://github.com/gaby28894178/Entregable2Clima.git'
    },
    {
      title: 'E-commerce',
      emoji: '/E-comorce/img1.png',
      imgHover: '/E-comorce/img.png',
      gallery: ['/E-comorce/img2.png', '/E-comorce/img3.png', '/E-comorce/img4.png', '/E-comorce/img5.png', '/E-comorce/img6.png', '/E-comorce/img7.png', '/E-comorce/img8.png', '/E-comorce/img1.png'],
      description: 'Tienda online completa con carrito de compras. login impresión de factura',
      demoUrl: 'https://shimmering-fox-c6c0eb.netlify.app',
      codeUrl: 'https://github.com/gaby28894178/EasyShop.git'
    },
    {
      title: 'Rick and Morty',
      emoji: '/rik_and_morty_2025/img1.png',
      imgHover: null,
      gallery: ['/rik_and_morty_2025/img1.png', '/rik_and_morty_2025/img2.png', '/rik_and_morty_2025/img5.png', '/rik_and_morty_2025/img4.png', '/rik_and_morty_2025/img5.png'],
      description: 'Plataforma de gestión de membresías, clases y entrenadores para gimnasios.',
      demoUrl: 'https://glowing-kelpie-0332f0.netlify.app/',
      codeUrl: 'https://github.com/gaby28894178/rik_and-morty_2025.git'
    },
    {
      title: 'Barber Shop',
      emoji: '/barberia/img1.jpg',
      imgHover: null,
      gallery: ['/barberia/img2.png', '/barberia/img3.png', '/barberia/img4.png', '/barberia/img5.png', '/barberia/img6.png'],
      description: 'Plataforma de gestión de membresías, clases y entrenadores para gimnasios.',
      demoUrl: 'https://genuine-marigold-696f21.netlify.app/',
      codeUrl: 'https://github.com/gaby28894178/001-barbershop.git'
    },
    {
      title: 'TV Argentina Online',
      emoji: '/tv-argentina/1.png',
      imgHover: '/tv-argentina/2.png',
      gallery: ['/tv-argentina/1.png', '/tv-argentina/2.png', '/tv-argentina/3.png', '/tv-argentina/img4.svg', '/tv-argentina/img5.svg'],
      description: 'Plataforma de streaming en línea para canales de televisión argentinos con diseño inspirado en la bandera argentina.',
      demoUrl: 'https://tv-ip-12025.onrender.com/',
      codeUrl: 'https://github.com/gaby28894178/tv-ip-12025.git'
    }
  ];

  const openModal = (images) => {
    if (images.length > 1) {
      setSelectedImages(images);
      setSingleImage(null);
    } else if (images.length === 1) {
      setSingleImage(images[0]);
      setSelectedImages([]);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setSingleImage(null);
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              darkMode={darkMode}
              openModal={() => openModal(project.gallery)}
              onViewClick={() => openModal(project.gallery)} // Aquí abrís el modal
            
/>
            
          ))}
        </div>
      </div>

      {selectedImages.length > 0 && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={selectedImages}
        />
      )}

      {singleImage && isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl font-bold">&times;</button>
            <img src={singleImage} alt="Vista ampliada" className="max-w-full max-h-[90vh] rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
