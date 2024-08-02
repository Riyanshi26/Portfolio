import React from 'react';
import data from "../Data/Skills.json";
import {SkillsCard} from './Cards';
const Skills = () => {
  function createCard(item) {
    return (
      <SkillsCard data={item}/>
    );
  }
  return (
    <div className="skills-container">
      {data.skills.map(createCard) }
    </div>
  );
};

export default Skills;
