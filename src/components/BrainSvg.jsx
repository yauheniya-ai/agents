import { useEffect, useRef } from 'react';

const BrainSvg = () => {
  const objectRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      const svgDoc = objectRef.current.contentDocument;
      const svg = svgDoc.querySelector('svg');
      const squares = Array.from(svg.querySelectorAll('rect'));

      const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
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

      updateSquares();
      const interval = setInterval(updateSquares, 500);
      return () => clearInterval(interval);
    };

    const obj = objectRef.current;
    obj.addEventListener('load', handleLoad);
    return () => obj.removeEventListener('load', handleLoad);
  }, []);

  return (
    <object
      ref={objectRef}
      type="image/svg+xml"
      data="/images/data_bg.svg"
      className="w-[1000px] h-auto opacity-20"
      style={{ transform: 'translate(-20px, -20px)' }}
    />
  );
};

export default BrainSvg;
