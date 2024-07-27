import React from 'react';
import data from "../Data/Education.json";

const Education = () => {
  return (
    <div>
      {data.education.map((item) => {
        return (
          <div className="education">
            <h3>{item.school}</h3>
            <h4>{item.location}</h4>
            <h4>{item.degree}</h4>
          </div>
        );
      } )}
    </div>
  );
};

export default Education;
