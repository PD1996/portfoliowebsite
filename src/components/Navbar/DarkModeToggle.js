import React from "react";

function DarkModeToggle({ onToggleDarkMode, isDarkMode }) {
  return (
    <div className="toggle-container" onClick={onToggleDarkMode}>
      <span
        className={`toggle-emoji light-emoji ${!isDarkMode ? "enlarged" : ""}`}
      >
        🙈
      </span>
      <div className="toggle-wrapper">
        <input
          id="darkModeToggle"
          type="checkbox"
          className="toggle-input"
          checked={isDarkMode}
          onChange={() => {}}
        />
        <label htmlFor="darkModeToggle" className="toggle-label">
          <div className="toggle-switch"></div>
        </label>
      </div>
      <span
        className={`toggle-emoji dark-emoji ${isDarkMode ? "enlarged" : ""}`}
      >
        😎
      </span>
    </div>
  );
}

export default DarkModeToggle;
