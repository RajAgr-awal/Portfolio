"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterText({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className = "",
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const tick = useCallback(() => {
    const currentFullText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing
      setDisplayText(currentFullText.substring(0, currentCharIndex + 1));
      setCurrentCharIndex((prev) => prev + 1);

      if (currentCharIndex + 1 === currentFullText.length) {
        // Finished typing, pause then delete
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      setDisplayText(currentFullText.substring(0, currentCharIndex - 1));
      setCurrentCharIndex((prev) => prev - 1);

      if (currentCharIndex - 1 === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span className={className} aria-label={texts.join(", ")}>
      {displayText}
      <span className="terminal-cursor text-primary font-light">|</span>
    </span>
  );
}
