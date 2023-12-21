import React from "react";

import TypingEffect from "../TypingEffect";
import EarthModel from "../EarthModel";

import "./About.css";

function About() {
  return (
    <div className="about-container">
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
          {
            text: "Focus | Machine Learning, Data Science and Backend Development",
            tag: "h4",
          },
          {
            text: "Featured Skills | SQL, C#, Java, Python, React.js",
            tag: "h4",
          },
        ]}
      />
      <EarthModel />
    </div>
  );
}

export default About;
