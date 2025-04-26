import { useState, useRef, useEffect } from 'react';

const HoverGrid = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState(null); 
  const gridRef = useRef(null);

  const squareSize = 8;
  const gap = 32;
  const scaleFactor = 4;
  const influenceRadius = 180; // How far mouse influences
  const baseColor = '#8b76e9'; // Base color

  useEffect(() => {
    const updateDimensions = () => {
      if (gridRef.current) {
        setDimensions({
          width: gridRef.current.offsetWidth,
          height: gridRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleMouseMove = (e) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    // Set mousePosition to null when mouse leaves grid
    setMousePosition(null);
  };

  const cols = Math.floor(dimensions.width / (squareSize + gap));
  const rows = Math.floor(dimensions.height / (squareSize + gap));

  return (
    <div
      className="w-full h-[480px] flex justify-center items-center relative overflow-hidden"
      ref={gridRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
          gap: `${gap}px`,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = col * (squareSize + gap) + (squareSize / 2);
          const y = row * (squareSize + gap) + (squareSize / 2);

          // Only calculate proximity if mousePosition is not null
          let proximity = 0;
          if (mousePosition) {
            const dx = mousePosition.x - x;
            const dy = mousePosition.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            proximity = Math.max(0, (influenceRadius - distance) / influenceRadius);
          }

          // Default state for when mouse is not influencing the square
          const dynamicScale = proximity > 0 ? 1 + proximity * (scaleFactor - 1) : 1;
          const opacity = proximity > 0 ? 0.3 + proximity * 0.9 : 0.3;

          // Reset zIndex when the proximity is low
          const zIndex = proximity > 0.1 ? 10 : 1;

          return (
            <div
              key={i}
              className="transition-all duration-100"
              style={{
                width: '100%',
                height: '100%',
                transform: `scale(${dynamicScale})`,
                backgroundColor: baseColor,
                opacity: opacity,
                zIndex: zIndex,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HoverGrid;
