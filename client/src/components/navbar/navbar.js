import "../../assets/fonts.css"
import "./navbar.css";
import React from "react";



const Navbar = () => (
    <nav className="navBar">
      <a id="contact-link" className="link" href="/contact">
        Contact me!
      </a>
      <a id="portfolio-link" className="link" href="/#portfolio">
        Portfolio
      </a>
      <a id="home-link" className="link" href="/">
        Home 
      </a>
    </nav>
  );
  
  export default Navbar;