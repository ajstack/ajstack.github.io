import React from "react";
import "./homepage.css";
import HomepageTitle from "../../components/homepageTitle";
import AboutMeCard from "../../components/aboutMeCard";
import Portfolio from "../portfolio";
import SkillsCard from "../../components/skillsCard/skillsCard";

const Homepage = () => (
  <div className="container">
    <div className="homepage">
      <HomepageTitle>Alicia Stack</HomepageTitle>
    </div>

    <div className="about-me">
      <AboutMeCard />
    </div>

    <div className="skill-list">
      <SkillsCard />
    </div>

    <div className="portfolio-section">
      <Portfolio />
    </div>
  </div>
);

export default Homepage;
