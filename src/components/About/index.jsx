import React from "react";

import TypingEffect from "../TypingEffect";
import EarthModel from "../EarthModel";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <EarthModel />
      <TypingEffect
        texts={[
          {
            text: "Peter Dyczkowski",
            tag: "h1",
          },
          {
            text: "Full-Stack Software Developer",
            tag: "h2",
          },
        ]}
      />
    </div>
  );
}

export default About;
