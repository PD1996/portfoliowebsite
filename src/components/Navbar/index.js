import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link
        className="nav-link"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        About
      </Link>

      <Link
        className="nav-link"
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Portfolio
      </Link>

      <Link
        className="nav-link-right"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
