import React, { Suspense, lazy } from "react";

import TypingEffect from "../TypingEffect";

import "./About.css";

const EarthModel = lazy(() => import("../EarthModel"));

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
            text: "Focus → Machine Learning, Data Science, Backend Development",
            tag: "h4",
          },
          {
            text: "Featured Skills → SQL, C#, Java, Python, React.js",
            tag: "h4",
          },
        ]}
      />
      <Suspense fallback={null}>
        <EarthModel />
      </Suspense>
    </div>
  );
}

export default About;
