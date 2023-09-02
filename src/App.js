import "./App.css";

import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site-container">
      <Navbar />
      <div className="section-fullscreen" id="about">
        <About />
      </div>
      <div className="section-fullscreen" id="portfolio">
        <Portfolio />
      </div>
      <div className="section-fullscreen" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
