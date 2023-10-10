import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function PortfolioCard({
  title,
  link,
  children,
  cardNumber,
  expandedCard,
  setExpandedCard,
}) {
  return (
    <div
      className={`portfolio-card ${
        expandedCard === cardNumber ? "card-expanded" : ""
      }`}
      onClick={() => {
        if (expandedCard === cardNumber) {
          setExpandedCard(null);
        } else {
          setExpandedCard(cardNumber);
        }
      }}
    >
      <h3>
        {title}
        <span className="toggle-arrow">
          <FontAwesomeIcon
            icon={expandedCard === cardNumber ? faChevronUp : faChevronDown}
          />
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link-icon"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default PortfolioCard;
