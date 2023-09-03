import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

function IconLinks() {
  return (
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
        <FontAwesomeIcon icon={faLinkedin} className="nav-icon linkedin" />
      </a>
      <a
        href="Peter Dyczkowski Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFilePdf} className="nav-icon pdf" />
      </a>
    </div>
  );
}

export default IconLinks;
