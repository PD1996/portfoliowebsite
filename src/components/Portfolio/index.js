import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [expandedCard, setExpandedCard] = useState(null); // Track the currently expanded card

  const toggleCard = (cardIndex) => {
    if (expandedCard === cardIndex) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardIndex);
    }
  };

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <p>
        Here are some fun personal projects I've worked on (or am currently
        working on) in my spare time!
      </p>
      <div className="portfolio-container">
        <div
          className={`portfolio-card ${
            expandedCard === 1 ? "card-expanded" : ""
          }`}
          onClick={() => toggleCard(1)}
        >
          <h2>Project 1</h2>
          <div className="card-content">
            <p>Short description of project 1.</p>
          </div>
        </div>
        <div
          className={`portfolio-card ${
            expandedCard === 2 ? "card-expanded" : ""
          }`}
          onClick={() => toggleCard(2)}
        >
          <h2>Project 2</h2>
          <div className="card-content">
            <p>Short description of project 2.</p>
          </div>
        </div>
        <div
          className={`portfolio-card ${
            expandedCard === 3 ? "card-expanded" : ""
          }`}
          onClick={() => toggleCard(3)}
        >
          <h3>Pythagorean Theorem Visualization Tool</h3>
          <div className="card-content">
            <img
              src="pythagorean.png"
              alt="Pythagorean Theorem Visualization"
            />
            <p>
              A simple Windows desktop application used to visualize the
              Pythagorean Theorem (A² + B² = C²).
            </p>
            <h5>March, 2019</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
