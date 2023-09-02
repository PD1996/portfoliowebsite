import React from "react";
import TypingEffect from "../TypingEffect";

function About() {
  return (
    <div className="about-container">
      <TypingEffect
        texts={[
          {
            text: "Hi there, I'm Peter! 👋",
            tag: "h1",
          },
          {
            text: "Welcome to my portfolio website.",
            tag: "p",
          },
        ]}
      />
    </div>
  );
}

export default About;
