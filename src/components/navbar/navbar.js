import React from "react";
import "./navbar.css"

const Navbar = () => (
    <nav className="navBar">
      <a href="/">
        Home 
      </a>
      <a href="/portfolio">
        Portfolio
      </a>
      <a href="/contact">
        Contact me!
      </a>
    </nav>
  );
  
  export default Navbar;