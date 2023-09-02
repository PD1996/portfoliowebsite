import React from "react";
import TypingEffect from "../TypingEffect";

function About() {
  return (
    <div className="about-container">
      <TypingEffect
        texts={[
          {
            text: "Software Developer | Tech Enthusiast | Lifelong Learner",
            tag: "h1",
          },
          {
            text: "Hello, I'm Peter! 👋",
            tag: "h2",
          },
          {
            text: "Welcome to my portfolio website.",
            tag: "h2",
          },
        ]}
      />
    </div>
  );
}

export default About;
