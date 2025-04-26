import { Canvas } from '@react-three/fiber'
import { Line, OrbitControls } from '@react-three/drei'

const HexagonalPrismEdges = () => {
  // Define points for hexagonal prism:
  // - Bottom hexagon (Y = -1)
  // - Top hexagon (Y = 1)
  const points = [
    // Bottom hexagon vertices (Y = -1)
    [ 1.0, -1.0,  0.0],    // 0 - right
    [ 0.5, -1.0,  0.866],  // 1 - upper right
    [-0.5, -1.0,  0.866],  // 2 - upper left
    [-1.0, -1.0,  0.0],    // 3 - left
    [-0.5, -1.0, -0.866],  // 4 - lower left
    [ 0.5, -1.0, -0.866],  // 5 - lower right
    
    // Top hexagon vertices (Y = 1)
    [ 1.0, 1.0,  0.0],     // 6 - right
    [ 0.5, 1.0,  0.866],   // 7 - upper right
    [-0.5, 1.0,  0.866],   // 8 - upper left
    [-1.0, 1.0,  0.0],     // 9 - left
    [-0.5, 1.0, -0.866],   // 10 - lower left
    [ 0.5, 1.0, -0.866],   // 11 - lower right
  ];

  // Define edges:
  const edges = [
    // Bottom hexagon edges
    [0,1], [1,2], [2,3], [3,4], [4,5], [5,0],
    // Top hexagon edges
    [6,7], [7,8], [8,9], [9,10], [10,11], [11,6],
    // Vertical edges connecting top and bottom
    [0,6], [1,7], [2,8], [3,9], [4,10], [5,11]
  ];

  return (
    <>
      {edges.map(([start, end], idx) => (
        <Line
          key={idx}
          points={[points[start], points[end]]}
          color="#8b76e9" // purple-100
          lineWidth={3}
        />
      ))}
    </>
  );
};

const GlowingPrism = () => {
  return (
    <div className="w-full h-64 flex-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <group scale={2}>
          <HexagonalPrismEdges />
        </group>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>
    </div>
  );
};

export default GlowingPrism;