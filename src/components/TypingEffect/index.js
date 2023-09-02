import React, { useState, useEffect } from "react";

function TypingEffect({ text }) {
  const [content, setContent] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      setTimeout(() => {
        setContent(content + text[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // typing speed in ms
    }
  }, [charIndex, content, text]);

  return <span>{content}</span>;
}

export default TypingEffect;
