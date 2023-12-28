import React, { useState } from "react";

import PortfolioCard from "./PortfolioCard";

import "./Portfolio.css";

function Portfolio() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="text-container">
        <p>A few personal projects I've worked on in my spare time.</p>
      </div>
      <div className="portfolio-container">
        <PortfolioCard
          title="This Website"
          link="https://github.com/PD1996/portfoliowebsite/tree/main/src"
          cardNumber={1}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="code.gif" alt="Code" />
          <p>
            A simple React.js website that uses React Three Fiber for 3D
            effects.
          </p>
          <h5>2023</h5>
        </PortfolioCard>

        {/* <PortfolioCard
          title="AI Chess Bots"
          link="https://github.com/PD1996/ai-chess-bot"
          cardNumber={2}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="chess.gif" alt="Chessboard" />
          <p>
            Will contain multiple chess engines trained in different ways for
            experimental purposes.
          </p>
          <h5>In Progress</h5>
        </PortfolioCard> */}

        <PortfolioCard
          title="Custom Trading Client"
          cardNumber={2}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        >
          <img src="tradingclient.gif" alt="Trading Client Demo" />
          <p>
            A Windows-based futures trading client built with C#. Executes
            orders and fetches market data through Interactive Brokers' TWS API.
            Automatically stores and retrieves analytics to and from an SQL
            database. Loads tradingview.com in a .NET webView for seemless
            charting access. Source code has been made private to prevent the
            possibility of somebody incurring financial losses while using this
            software. That being said, I would be happy to provide more details
            to those who reach out!
          </p>
          <h5>November, 2022</h5>
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
            A Windows desktop application built with C# used to visualize the
            Pythagorean Theorem (A² + B² = C²).
          </p>
          <h5>March, 2019</h5>
        </PortfolioCard>
      </div>
    </div>
  );
}

export default Portfolio;
