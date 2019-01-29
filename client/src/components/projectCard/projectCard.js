import React from "react";
import "./projectCard.css"
import "../../assets/fonts.css"

const ProjectCard = props => (
  <div className="project-card">
    <div className="project-img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="project-content">
      <a className="project-title" href={props.link}>
        <h3>{props.name}</h3>
      </a>
    </div>
  </div>
);

export default ProjectCard;