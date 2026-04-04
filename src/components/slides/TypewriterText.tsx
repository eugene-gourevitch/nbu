import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorColor?: string;
}

const TypewriterText = ({
  text,
  speed = 30,
  delay = 800,
  className = "",
  cursorColor = "hsl(var(--slide-primary))",
}: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span
          className="inline-block w-[3px] ml-[2px] animate-pulse"
          style={{
            height: "1em",
            backgroundColor: cursorColor,
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </span>
  );
};

export default TypewriterText;
