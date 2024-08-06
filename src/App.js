import React, { useState, useEffect } from 'react';
import Skills from './components/Skills';
import LeftSection from './components/LeftSection';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';

const sections = [ 'Skills','Education', 'Experience', 'Projects'];

const sectionComponents = {
  Skills: Skills,
  Projects: Projects,
  Experience: Experience,
  Education: Education,
};

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScroll = () => {
    const sectionOffsets = sections.map((_, index) => {
      const section = document.getElementById(`section-${index}`);
      return section ? section.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const currentSection = sectionOffsets.findIndex((offset, index) => {
      return scrollPosition >= offset && (index === sections.length - 1 || scrollPosition < sectionOffsets[index + 1]);
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="left">
        <LeftSection 
          sections={sections}
          activeSection={activeSection}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />  
      </div>

      <div className="right">
        {sections.map((section, index) => {
          const SectionComponent = sectionComponents[section];
          return (
            <div key={index} id={`section-${index}`} className="section">
              <SectionComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
