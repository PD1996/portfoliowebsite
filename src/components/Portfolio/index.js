import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <p>
        Here are some fun personal projects I've worked on (or am currently
        working on) in my spare time!
      </p>
      <div className="portfolio-container">
        <PortfolioCard
          title="Project 1"
          link="https://link-to-project1.com"
          cardNumber={1}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <p>Short description of project 1.</p>
        </PortfolioCard>

        <PortfolioCard
          title="Project 2"
          link="https://link-to-project2.com"
          cardNumber={2}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <p>Short description of project 2.</p>
        </PortfolioCard>

        <PortfolioCard
          title="Pythagorean Visualization Tool"
          link="https://github.com/PD1996/.NET-Pythagorean-Theorem-Visualization-Tool"
          cardNumber={3}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="pythagorean.png" alt="Pythagorean Theorem Visualization" />
          <p>
            A simple Windows desktop application used to visualize the
            Pythagorean Theorem (A² + B² = C²).
          </p>
          <h5>March, 2019</h5>
        </PortfolioCard>
      </div>
    </div>
  );
}

export default Portfolio;
