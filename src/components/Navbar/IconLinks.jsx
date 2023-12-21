import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function IconLinks({ className }) {
  return (
    <div className={`icon-links ${className}`}>
      <a
        href="https://www.linkedin.com/in/peter-dyczkowski-5a653725a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="nav-icon linkedin" />
      </a>
      <a
        href="https://github.com/PD1996"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="nav-icon github" />
      </a>
    </div>
  );
}

export default IconLinks;
