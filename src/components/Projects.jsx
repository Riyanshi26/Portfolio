import React from 'react';
import project from "../Data/Projects.json";
import { ProjectCard } from './Cards';

const Projects = () => {
  function create_project(project) {
    return (
      <ProjectCard data={project}/>
    );
  }
  return (
    <div className="projects-container">
      {project.projects.map(create_project)}
      
    </div>
  );
};

export default Projects;
