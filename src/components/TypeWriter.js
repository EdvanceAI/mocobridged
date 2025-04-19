import React, { useState, useEffect } from 'react';

const TypeWriter = ({ texts, delay = 100, eraseDelay = 50, pauseDelay = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      // Erasing text
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, eraseDelay);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      // Typing text
      const currentText = texts[currentIndex];
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, delay);
      } else {
        // Pause before erasing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, delay, eraseDelay, pauseDelay]);

  return (
    <span className="font-medium">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypeWriter;