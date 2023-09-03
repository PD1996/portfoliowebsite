import React from "react";
import TypingEffect from "../TypingEffect";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <TypingEffect
        texts={[
          {
            text: "Hello World! I'm Peter 👋",
            tag: "h1",
          },
          {
            text: "From the heart of Kelowna, BC, Canada, my journey in tech has been driven by a desire to solve real-world challenges.",
            tag: "p",
          },
          {
            text: "While I gravitate towards backend development and its structured logic, I'm also skilled at creating functional and aesthetic user interfaces.",
            tag: "p",
          },
          {
            text: "Though rooted in BC, I'm always up for new adventures. Relocating? Definitely on the table for the right opportunity.",
            tag: "p",
          },
          {
            text: "Got a tech thought or just want to discuss the latest trends? I'm here for it. Let's connect!",
            tag: "p",
          },
        ]}
      />
    </div>
  );
}

export default About;
