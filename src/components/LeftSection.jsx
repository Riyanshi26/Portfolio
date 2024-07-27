import React from 'react';
import {Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const LeftSection = ({ sections, activeSection, hoveredIndex, setHoveredIndex }) => {
  return (
    <>
    <div className='left-heading'>
      <h1>Riyanshi Goyal</h1>
      <h5>Software Engineer, full-Stack Developer</h5>
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
