import React, { Component } from "react";
import "./projectCard.css"
import "../../assets/fonts.css"

class ProjectCard extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
    }
  }

  render() {
    return (
      <ProjectCardContainer
        id={this.props.id}
        key={this.props.id}
        image={this.props.image}
        name={this.props.name}
        link={this.props.link} />
    )
  }
}


const ProjectCardContainer = props => (
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