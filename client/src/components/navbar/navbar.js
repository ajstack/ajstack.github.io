import React from "react";
import "./navbar.css"

const Navbar = () => (
    <nav className="navBar">
      <a id="contact-link" className="link" href="/contact">
        Contact me!
      </a>
      <a id="portfolio-link" className="link" href="/portfolio">
        Portfolio
      </a>
      <a id="home-link" className="link" href="/">
        Home 
      </a>
    </nav>
  );
  
  export default Navbar;