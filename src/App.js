import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar preferencia del sistema o localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Aplicar clase dark al body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar preferencia
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <LayoutHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode}/>
        <ContactSection darkMode={darkMode} />
      </main>
      <LayoutFooter darkMode={darkMode} />
    </div>
  );
};

export default App;

// DONE