import React, { useEffect, useState } from 'react';
import '../css/'; // Make sure to import your CSS

const FadeInButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 500); // Delay for fade-in

    return () => clearTimeout(timer);
  }, []);

  return (
    <button className={`button-30 ${isVisible ? 'fade-in-up' : ''} ${isAnimating ? 'fade-in-up' : ''}`}>
      Click Me
    </button>
  );
};

export default FadeInButton;
