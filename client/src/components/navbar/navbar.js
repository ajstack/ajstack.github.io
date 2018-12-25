import React from "react";
import "./navbar.css"

const Navbar = () => (
    <nav className="navBar">
      <a className="contact-link" href="/contact">
        Contact me!
      </a>
      <a className="portfolio-link" href="/portfolio">
        Portfolio
      </a>
      <a className="home-link" href="/">
        Home 
      </a>
    </nav>
  );
  
  export default Navbar;