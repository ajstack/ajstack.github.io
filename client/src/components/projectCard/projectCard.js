import React from "react";
import "./projectCard.css"

const ProjectCard = props => (
  <div className="project-card">
    <div className="project-img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="project-content">
      <a href={props.link}><h3 className="project-title">{props.name}</h3></a>
    </div>
  </div>
);

export default ProjectCard;