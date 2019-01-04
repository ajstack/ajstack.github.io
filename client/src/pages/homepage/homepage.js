import React from "react";
import "./homepage.css";
import HomepageTitle from "../../components/homepageTitle";
import AboutMeCard from "../../components/aboutMeCard";

const Homepage = () => (
  <div className="homepage">
    <HomepageTitle>Alicia Stack</HomepageTitle>
    <AboutMeCard />
  </div>

);

export default Homepage;
