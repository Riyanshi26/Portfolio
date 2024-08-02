import React from 'react';
import data from "../Data/Education.json";
import { EducationCard } from './Cards';

const Education = () => {
  function createCard(item) {
    return (
      <EducationCard data={item}/>
    );
  }
  return (
    <div className="education-container">
      {data.education.map(createCard)}
    </div>
  );
};

export default Education;
