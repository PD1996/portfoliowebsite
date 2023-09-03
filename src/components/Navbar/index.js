import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";

import DarkModeToggle from "./DarkModeToggle";

function Navbar({ onToggleDarkMode, isDarkMode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= 768);
      });
    };
  }, []);

  const MobileMenu = () => (
    <Menu right>
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
        className="nav-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Contact
      </Link>
    </Menu>
  );

  return (
    <nav>
      <DarkModeToggle
        onToggleDarkMode={onToggleDarkMode}
        isDarkMode={isDarkMode}
      />

      {isMobile ? (
        <MobileMenu />
      ) : (
        <>
          <div className="nav-links">
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
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
          </div>
          <div className="icon-links">
            <a
              href="https://github.com/PD1996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="nav-icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-dyczkowski-5a653725a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="nav-icon linkedin"
              />
            </a>
            <a
              href="Peter Dyczkowski Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} className="nav-icon pdf" />
            </a>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
