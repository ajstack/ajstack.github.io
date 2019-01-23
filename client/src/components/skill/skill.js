import React from "react";
import "../../assets/fonts.css";
import "./skill.css";


const Skill = props => (
    <li className="skill">
      <div>
        <p>{props.skill}</p>
        {/* <img alt={props.skill} src={props.image} /> */}
      </div>
    </li>
);

export default Skill;