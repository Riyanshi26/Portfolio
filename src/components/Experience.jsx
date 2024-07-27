import React from 'react';
import data from "../Data/Experience.json";

const Experience = () => {
  return (
    <div>
      {data.experience.map((item) => {
        return (
          <div className="experience">
            <h3>{item.company}</h3>
            <h4>{item.designation}</h4>
            <h5>{item.start}</h5>
            <p>{item.end}</p>
          </div>
        );
      }) }
    </div>
  );
};

export default Experience;
