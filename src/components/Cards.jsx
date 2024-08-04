import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Projects from './Projects';

function ProjectCard(props){
    return (
        <div className="project">
            <img src={process.env.PUBLIC_URL + `${props.data.img}` } alt="My Image" />
            <div className='content'>
                <div className='content-header'>
                    <h6>{props.data.title}</h6>
                    <div style={{display:"flex",gap:"1rem"}}><FiGithub/> <FiExternalLink/></div>
                </div>
                <p>{props.data.summary}</p>
                <div className='techDiv'>{
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
                <h4>{props.data.school}</h4>
                {props.data.startDate? <h6>{props.data.startDate} - {props.data.endDate}</h6>: <h6>{props.data.endDate}</h6>}
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h5>{props.data.degree}</h5>
                <div><h6><FaLocationDot size={14}/>{props.data.location}</h6></div>
            </div>
            <p>{isPercent? "Percentage": "CGPA"}: {props.data.grade}</p>
        </div>
    );
}

function ExperienceCard(props){
    return (
        <div className="experience">
            <div className='expDate'>
                <p>{props.data.startDate? <>{props.data.startDate} - {props.data.endDate} </>: <>{props.data.endDate}</>}</p>
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
                <div className='techDiv'>{
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