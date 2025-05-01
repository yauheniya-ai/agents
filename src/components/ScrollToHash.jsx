// src/components/ScrollToHash.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Extract actual ID from a double hash like "#/#about"
      const parts = hash.split('#');
      const id = parts.length === 3 ? parts[2] : parts[1]; // handles both "#/#about" and "#about"

      if (id) {
        // Delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -80; // Adjust for fixed navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100); // 100ms delay helps when navigating from another page
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
