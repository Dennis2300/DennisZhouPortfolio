import React, { useEffect } from "react";
import "./../css/BlinkingCursor.css";

export default function TypeWriter({ text, speed }) {
  const [displayText, setDisplayText] = React.useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span>
      {displayText}
      <span className="blinking-cursor"></span>
    </span>
  );
}
