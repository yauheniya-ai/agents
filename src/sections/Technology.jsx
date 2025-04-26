import { logoIconsList } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { useState, useRef, useEffect } from 'react';

const LogoIcon = ({ icon, index }) => {
  return (
    <GlowCard card={{}} index={index}>
      <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
      </div>
    </GlowCard>
  );
};

const HoverGrid = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const cols = Math.floor(dimensions.width / (squareSize + gap));
  const rows = Math.floor(dimensions.height / (squareSize + gap));

  return (
    <div
      className="w-full h-[400px] flex justify-center items-center relative overflow-hidden"
      ref={gridRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
          gap: `${gap}px`,
          pointerEvents: "none", // allow mouse move over everything
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = col * (squareSize + gap) + (squareSize / 2);
          const y = row * (squareSize + gap) + (squareSize / 2);

          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const proximity = Math.max(0, (influenceRadius - distance) / influenceRadius);

          // Calculate scale based on proximity
          const dynamicScale = 1 + proximity * (scaleFactor - 1);

          // Calculate opacity (20% when far, 100% when close)
          const opacity = 0.3 + proximity * 0.9; // between 0.2 and 1

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
                zIndex: proximity > 0.1 ? 10 : 1,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};


const Technology = () => (
  <section id="technology" className="flex-center section-padding">
    <div className="md:my-20 my-10 relative">
      <TitleHeader
        sub={
          <span className="flex items-center gap-2">
            <img 
              src="/public/images/engineering.svg" 
              width="24" 
              height="24" 
              alt="Robot arm"
              className="text-white transform scale-x-[-1]"
              style={{ transform: 'scaleX(+1)' }}
            />
            Tech Stack
          </span>
        }
        title="Technologies to Build and Deploy AI Agents"
      />

      {/* Grid replacing the 3D model */}
      <div className="w-full flex justify-center items-center my-16">
        <div className="relative w-full max-w-full px-4">
          <HoverGrid />
        </div>
      </div>

      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`first-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`second-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Technology;