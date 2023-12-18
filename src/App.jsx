import "./App.css";

import { useEffect, useState } from "react";

import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(localDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="site-container">
      <Navbar
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        isDarkMode={darkMode}
      />

      <div className="section-fullscreen" id="about">
        <About />
      </div>
      <div className="section-fullscreen" id="portfolio">
        <Portfolio />
      </div>
      <div className="section-fullscreen" id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
