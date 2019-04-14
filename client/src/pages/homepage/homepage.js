import React from "react";
import "./homepage.css";
import HomepageTitle from "../../components/homepageTitle";
import AboutMeCard from "../../components/aboutMeCard";
import Portfolio from "../portfolio";
import SkillsCard from "../../components/skillsCard/skillsCard";
import PictureCard from "../../components/pictureCard/pictureCard";

const Homepage = () => (
  <div className="container">
    <div className="homepage">
      <HomepageTitle>Alicia Stack</HomepageTitle>
    </div>

    <div className="intro">
      <div className="img-card">
        <PictureCard />
      </div>

      <div className="about-me">
        <AboutMeCard />
      </div>

      <div className="skill-list">
        <SkillsCard />
      </div>
    </div>

    <div className="portfolio-section" id="portfolio">
      <Portfolio />
    </div>
  </div>
);

export default Homepage;
