import { useEffect, useRef, useState } from 'react';

const BrainSvg = () => {
  const objectRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const svgDoc = objectRef.current.contentDocument;
      const svg = svgDoc.querySelector('svg');
      const squares = Array.from(svg.querySelectorAll('rect'));

      // Initially hide the entire SVG
      objectRef.current.style.opacity = '0';

      const shuffle = (arr) => {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
      };

      const updateSquares = () => {
        const counts = { 'cls-1': 0, 'cls-2': 0, 'cls-3': 0, 'cls-4': 0 };
        const maxCls1 = Math.floor(squares.length * 0.025);
        const maxCls2 = Math.floor(squares.length * 0.025);
        const maxCls3 = Math.floor(squares.length * 0.05);
        const maxCls4 = Math.floor(squares.length * 0.8);

        const shuffled = shuffle([...squares]);

        shuffled.forEach((square) => {
          square.style.transition = 'opacity 0.5s ease-in-out';
          const rand = Math.random();

          if (rand < 0.3) {
            square.style.opacity = '0';
          } else {
            square.style.opacity = '1';

            const availableClasses = [];
            if (counts['cls-1'] < maxCls1) availableClasses.push('cls-1');
            if (counts['cls-2'] < maxCls2) availableClasses.push('cls-2');
            if (counts['cls-3'] < maxCls3) availableClasses.push('cls-3');
            if (counts['cls-4'] < maxCls4) availableClasses.push('cls-4');

            const selectedClass = availableClasses[Math.floor(Math.random() * availableClasses.length)];
            square.setAttribute('class', selectedClass);
            counts[selectedClass]++;
          }
        });
      };

      // Run animation first without showing the SVG
      updateSquares();
      
      // Start the interval
      const interval = setInterval(updateSquares, 500);
      
      // After a brief delay, show the SVG with animation already running
      setTimeout(() => {
        objectRef.current.style.transition = 'opacity 1s ease-in-out';
        objectRef.current.style.opacity = '0.3'; 
        setIsLoaded(true);
      }, 500);

      return () => clearInterval(interval);
    };

    const obj = objectRef.current;
    if (obj) {
      obj.addEventListener('load', handleLoad);
      return () => obj.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <object
      ref={objectRef}
      type="image/svg+xml"
      data={`${import.meta.env.BASE_URL}images/data_bg.svg`}
      className="w-[1000px] h-auto"
      style={{ 
        transform: 'translate(-20px, -20px)',
        opacity: 0, // Start completely hidden
        transition: 'opacity 1s ease-in-out'
      }}
    />
  );
};

export default BrainSvg;