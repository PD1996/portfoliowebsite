import React, { useState, useEffect } from "react";

function TypingEffect({ texts }) {
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].text.length) {
        setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, 25); // typing speed in ms
      } else if (textIndex < texts.length - 1) {
        setTimeout(() => {
          setTextIndex(textIndex + 1);
          setCharIndex(0);
        }, 250); // delay in ms before starting next text
      }
    }
  }, [charIndex, textIndex, texts]);

  return (
    <>
      {texts.slice(0, textIndex).map((item, index) => {
        const Tag = item.tag;
        return <Tag key={index}>{item.text}</Tag>;
      })}
      {texts[textIndex] &&
        React.createElement(
          texts[textIndex].tag,
          null,
          texts[textIndex].text.slice(0, charIndex)
        )}
    </>
  );
}

export default TypingEffect;
