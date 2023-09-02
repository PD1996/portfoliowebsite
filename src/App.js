import "./App.css";

import TypingEffect from "./components/TypingEffect";

function App() {
  return (
    <div className="site-container">
      <header className="main-header">
        <TypingEffect
          texts={[
            {
              text: "Software Developer | Tech Enthusiast | Lifelong Learner",
              tag: "h1",
            },
            {
              text: "Hello, I'm Peter! 👋",
              tag: "h2",
            },
            {
              text: "Welcome to my portfolio website.",
              tag: "h2",
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
