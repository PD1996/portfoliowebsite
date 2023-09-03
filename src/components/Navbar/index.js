import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

import DarkModeToggle from "./DarkModeToggle";
import IconLinks from "./IconLinks";

import "./Navbar.css";

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
      <DarkModeToggle
        onToggleDarkMode={onToggleDarkMode}
        isDarkMode={isDarkMode}
      />
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
      <IconLinks />
    </Menu>
  );

  return (
    <nav>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <>
          <DarkModeToggle
            onToggleDarkMode={onToggleDarkMode}
            isDarkMode={isDarkMode}
          />
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
          <IconLinks />
        </>
      )}
    </nav>
  );
}

export default Navbar;
