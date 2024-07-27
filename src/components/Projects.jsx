import React from 'react';
import project from "../Data/Projects.json";
import { Project } from './Cards';

const Projects = () => {
  function create_project(project) {
    return (
      <Project title={project.title} code={project.code} summary={project.summary}/>
    );
  }
  return (
    <div>
      {project.projects.map(create_project)}
      
    </div>
  );
};

export default Projects;
