import React, { Component } from "react";
// import $ from "jquery";
import "./projectCard.css"
import "../../assets/fonts.css"

class ProjectCard extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
    }
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    // $(".project-summary").hide();
    // if (this.state.hover) {
    //   $(".project-summary").fadeIn("slow");
    // }
    // else {

    // }
    return (
      <ProjectCardContainer
        id={this.props.id}
        key={this.props.id}
        image={this.props.image}
        name={this.props.name}
        link={this.props.link}
        summary={this.props.summary} 
        toggleHover={() => this.toggleHover()}
      />
    )
  }
}


const ProjectCardContainer = props => (
  <div className="project-card">
    <div className="project-img-container" onMouseOver={props.toggleHover}>
      <img alt={props.name} src={props.image} />
      <div className="project-summary">{props.summary}</div>
    </div>
    <div className="project-content">
      <a className="project-title" href={props.link}>
        <h3>{props.name}</h3>
      </a>
    </div>
  </div>
);

export default ProjectCard;