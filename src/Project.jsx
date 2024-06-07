import React from "react";
import "./Project.css";
import githubLogo from "./assets/github-mark-white.svg";
import demoLogo from "./assets/demo_logo.svg";
export default function Project({title, description, github, demo, img}) {
    return (
        <>
            <div className="project">
                <div className="info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="links">
                        <a href={github} target="_blank" rel="noreferrer">
                            <img className="project-icon" src={githubLogo} alt="github" />
                        </a>
                        <a href={demo} target="_blank" rel="noreferrer">
                            <img className="project-icon" src={demoLogo} alt="demo" />
                        </a>
                    </div>
                </div>
                <div className="image">
                    <img src={img} alt={"project"} />
                </div>
            </div>
        </>
    )
}