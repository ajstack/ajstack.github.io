import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import ProjectCard from "../../components/projectCard";
import PortfolioTitle from "../../components/portfolioTitle";
import projects from "../../assets/projects.json";
import "./portfolio.css";

class Portfolio extends Component {

  state = {
    projects
  };

  render() {
    return (
      <div className="portfolio">
        <Wrapper>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          {this.state.projects.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              image={project.image}
              name={project.name}
              link={project.link}
              summary={project.summary}
            />
          ))}

        </Wrapper>
      </div>
    )
  }
}

export default Portfolio;