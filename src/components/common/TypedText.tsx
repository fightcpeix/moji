'use client';

import { useEffect, useState } from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const TypedText: React.FC<TypedTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return <span className={className}>{displayedText}</span>;
};
