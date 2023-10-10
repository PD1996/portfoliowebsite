import React from "react";
import TypingEffect from "../TypingEffect";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <TypingEffect
        texts={[
          {
            text: "Hello World!",
            tag: "h1",
          },
          {
            text: "I'm Peter Dyczkowski 👋",
            tag: "h2",
          },
          {
            text: "A full-stack software developer with a passion for utilizing creativity to solve real-world problems.",
            tag: "h3",
          },
          {
            text: "I like to keep myself open to new opportunities and challenges, so please feel free to connect!",
            tag: "p",
          },
        ]}
      />
    </div>
  );
}

export default About;
