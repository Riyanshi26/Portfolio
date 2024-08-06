import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";


function ProjectCard(props){
    return (
        <div className="project">
            <img src={process.env.PUBLIC_URL + `${props.data.img}` } alt="My Image" />
            <div className='content'>
                <div className='content-header'>
                    <h6>{props.data.title}</h6>
                    <div style={{display:"flex",gap:"1rem"}}>
                        <a href={props.data.code}> <FiGithub/> </a>
                        { props.data.link ? <a href={props.data.link}><FiExternalLink/></a> : null } 
                    </div>
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
        <div className="education" style={{marginBottom:'1rem'}}>
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
    
      const afterStyle = {
        content: '""',
        position: 'absolute',
        bottom: '10.5%',
        zIndex: -1,
        height: '0.25em',
        width: '102%',
        left: '-1%',
        backgroundColor: props.data.UnderlineColor,
        transition: 'all 0.1s ease-in-out'
      };
    return (
        <div className="skills">
            <div style={{display:"flex", gap:"1rem"}}>
                {(() => {
                switch (props.data.id) {
                    case 1:
                        return <FaRegFileCode size={32}/>;
                    case 2:
                        return <FaReact size={32}/>;
                    case 3:
                        return <HiOutlineDesktopComputer size={32} />;
                }
                })()}
                <h3>{props.data.title} <span style={afterStyle} /></h3>
            </div>
            <div className="skill">
                <div style={{ color: 'grey' }}>{`<h5>`}</div>
                {props.data.skill.map((item) =>
                    <ul> 
                        <li> {item.map((skill) => <> {skill},</> )} </li>
                    </ul>
                )}
                <div style={{ color: 'grey' }}>{`<h5>`}</div>
            </div>
        </div>
    );
}

export {ProjectCard, EducationCard, ExperienceCard,SkillsCard};