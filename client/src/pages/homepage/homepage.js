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
      <AboutMeCard />
    </div>

    <div className="skills-card">
      <SkillsCard />
    </div>

    <div className="portfolio-section">
      <Portfolio />
    </div>
  </div>
);

export default Homepage;
