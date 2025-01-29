import { useState, useEffect } from "react";

export default function TypewriterEffect({ textx }: { textx: string }) {
  const text = textx;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 10); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p>
      {displayText}
      <span className="animate-blink"> |</span>
    </p>
  );
}
