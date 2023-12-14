import React from "react";
import TypingEffect from "../TypingEffect";
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
        ]}
      />
    </div>
  );
}

export default About;
