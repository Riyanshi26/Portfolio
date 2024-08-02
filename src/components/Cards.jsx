import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Projects from './Projects';

function ProjectCard(props){
    return (
        <div className="project">
            <img src={process.env.PUBLIC_URL + '/images/juice.jpeg'} alt="My Image" />
            <div className='content'>
                <div className='content-header'>
                    <h6>{props.data.title}</h6>
                    <div style={{display:"flex",gap:"1rem"}}><FiGithub/> <FiExternalLink/></div>
                </div>
                <p>{props.data.summary}</p>
                <div style={{display:"flex", gap:"0.3rem"}}>{
                    props.data.techStack.map((item,index) => 
                        <div className='techStack'>{item}</div>        
                    )}
                </div>
                    
                
                {/* <a href={props.data.code}>Github</a> */}
            </div>
        </div>
    );
}

function EducationCard(props){
    const isPercent= props.data.grade.includes("%");
    return (
        <div className="education">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h5>{props.data.school}</h5>
                {props.data.startDate? <h5>{props.data.startDate} - {props.data.endDate}</h5>: <h5>{props.data.endDate}</h5>}
            </div>
            <FaLocationDot /> {props.data.location}
            <h4>{props.data.degree}</h4>
            {isPercent? "Percentage": "CGPA"}: {props.data.grade}
        </div>
    );
}

function ExperienceCard(props){
    return (
        <div className="experience">
            <div className='expDate'>
                {props.data.startDate? <>{props.data.startDate} - {props.data.endDate} </>: <>{props.data.endDate}</>}
            </div>
            <div className='expData'>
                <div> 
                    <h5>{props.data.designation}</h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h6>{props.data.company}</h6> 
                        <div> <p><FaLocationDot size={14}/>{props.data.location}</p></div>
                    </div>
                </div>
                {props.data.description.map((item, index) => <p>{item}</p>)}
                <div style={{display:"flex", gap:"0.3rem"}}>{
                    props.data.techStack.map((item,index) => 
                        <div className='techStack'>{item}</div>        
                    )}
                </div>
            </div>
        </div>
    );
}

function SkillsCard(props){
    return (
        <div className="skills">
            <h4>{props.data.title}</h4>
            <div className="skills">
                {props.data.skill.map((item, index) =><> {item}, </>)}
            </div>
        </div>
    );
}

export {ProjectCard, EducationCard, ExperienceCard,SkillsCard};