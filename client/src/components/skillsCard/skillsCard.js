import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Skill from "../skill";
import skillset from "../../assets/skills.json";
import "./skillsCard.css";

class SkillsCard extends Component {

  state = {
    skillset
  };

  render() {
    return (
      <div className="skills-card">
        <h2 className="skills-title">Skills</h2>
        <Wrapper>
          {this.state.skillset.map(skill => (
            <ul className="skills-list">
              <Skill
                id={skill.id}
                key={skill.id}
                // image={skill.image}
                skill={skill.skill}
              />
            </ul>
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default SkillsCard;


