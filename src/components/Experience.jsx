import React from 'react';
import data from "../Data/Experience.json";
import { ExperienceCard } from './Cards';

const Experience = () => {
  function createCard(item) {
    return (
      <ExperienceCard data={item}/>
    );
  }
  return (
    <div className="experience-container">
      {data.experience.map(createCard) }
    </div>
  );
};

export default Experience;
