import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const LeftSection = ({ sections, activeSection, hoveredIndex, setHoveredIndex }) => {
  return (
    <>
    <div className='left-heading'>
      <h1>Riyanshi Goyal</h1>
      <h4>Software Engineer, Full-Stack Developer</h4>
      <h5><a href={process.env.PUBLIC_URL +`/RiyanshiGoyal_resume.pdf`}>View full resume  <FiExternalLink/> </a></h5>
    </div>

    <div className="indicator-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`indicator ${activeSection === index || hoveredIndex === index ? 'active' :  hoveredIndex !== null ? 'dimmed' : ''}`}
          onClick={() => {
            const sectionElement = document.getElementById(`section-${index}`);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <b>{section}</b>
        </div>
      ))}
    </div>

    <div className='icons'>
      <a href='https://github.com/Riyanshi26'> <FaGithub /></a>
      <a href ='https://www.linkedin.com/in/riyanshi-goyal-6884b7212/'><FaLinkedin /></a>
      <a href='mailto:riyanshigoyal@iitbhilai.ac.in'><IoMdMail /> </a>
    </div>
    </>
  );
};

export default LeftSection;
