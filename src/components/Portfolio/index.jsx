import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="text-container">
        <p>
          Here are some fun personal projects I've worked on (or am currently
          working on) in my spare time!
        </p>
      </div>
      <div className="portfolio-container">
        <PortfolioCard
          title="This Website!"
          link="https://github.com/PD1996/portfoliowebsite/tree/main/src"
          cardNumber={1}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="code.gif" alt="Code" />
          <p>
            A simple React website that uses React Three Fiber for 3D effects.
          </p>
          <h5>2023</h5>
        </PortfolioCard>

        <PortfolioCard
          title="AI Chess Bots"
          link="https://github.com/PD1996/ai-chess-bot"
          cardNumber={2}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="chess.png" alt="Chessboard" />
          <p>
            Will contain multiple chess engines trained in different ways for
            experimental purposes.
          </p>
          <h5>October, 2023 - In Progress</h5>
        </PortfolioCard>

        <PortfolioCard
          title="Pythagorean Visualization Tool"
          link="https://github.com/PD1996/.NET-Pythagorean-Theorem-Visualization-Tool"
          cardNumber={3}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="pythagorean.gif" alt="Pythagorean Theorem Visualization" />
          <p>
            A Windows desktop application built with C# and .NET used to
            visualize the Pythagorean Theorem (A² + B² = C²).
          </p>
          <h5>March, 2019</h5>
        </PortfolioCard>
      </div>
    </div>
  );
}

export default Portfolio;
