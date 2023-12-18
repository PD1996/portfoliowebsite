import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <p>
      3D Earth Model by{" "}
      <a
        href="https://sketchfab.com/3d-models/earth-63d902b12fd14868b4dc2f19dc21d7c2"
        target="_blank"
        className="footer-link"
      >
        kongle
      </a>{" "}
      licensed under{" "}
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        className="footer-link"
      >
        CC BY-SA 4.0
      </a>
      .
    </p>
  );
}

export default Footer;
