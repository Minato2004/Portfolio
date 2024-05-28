import React from "react";
import "./Project.css";
export default function Project({title, description, github, demo, img}) {
    return (
        <>
            <div className="project">
                <div className="info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                    <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                    </div>
                </div>
                <div className="image">
                    <img src={img} alt="project image" />
                </div>
            </div>
        </>
    )
}