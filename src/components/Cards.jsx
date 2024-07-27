import React from 'react';

function Project(props){
    return (
        <div className="project">
            <img src={process.env.PUBLIC_URL + '/images/juice.jpeg'} alt="My Image" />
            <div>
                <h3>{props.title}</h3>
                <p>{props.summary}</p>
                {/* <a href={props.code}>Github</a> */}
            </div>
        </div>
    );
}

export {Project};