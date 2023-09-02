import logo from "./logo.svg";
import "./App.css";

import TypingEffect from "./components/TypingEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypingEffect text="Hello, I'm Peter! 👋 Welcome to my portfolio website." />
        <TypingEffect text="Software Developer | Tech Enthusiast | Lifelong Learner" />
      </header>
    </div>
  );
}

export default App;
