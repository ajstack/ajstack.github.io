import React from "react";
import "./homepage.css";
import HomepageTitle from "../../components/homepageTitle";
import AboutMeCard from "../../components/aboutMeCard";
import Portfolio from "../portfolio";


const Homepage = () => (
  <div className="container">
    <div className="homepage">
      <HomepageTitle>Alicia Stack</HomepageTitle>
      <AboutMeCard />
    </div>

    <div className="portfolio-section">
      <Portfolio />
    </div>
  </div>
);

export default Homepage;
