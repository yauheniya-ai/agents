import { Canvas } from '@react-three/fiber'
import { Line, OrbitControls } from '@react-three/drei'

const HexagonalPyramidEdges = () => {
  // Define points for hexagonal pyramid:
  // - Base: 6 points forming a hexagon (now on Y = -1 plane)
  // - Apex: 1 point at the top (Y = 1)
  const points = [
    // Base vertices (hexagon on Y = -1 plane)
    [ 1.0, -1.0,  0.0],    // 0 - right
    [ 0.5, -1.0,  0.866],  // 1 - upper right
    [-0.5, -1.0,  0.866],  // 2 - upper left
    [-1.0, -1.0,  0.0],    // 3 - left
    [-0.5, -1.0, -0.866],  // 4 - lower left
    [ 0.5, -1.0, -0.866],  // 5 - lower right
    
    // Apex (pointing upwards along Y-axis)
    [ 0.0,  1.0,  0.0],    // 6 - top
  ];

  // Define edges:
  const edges = [
    // Base hexagon edges
    [0,1], [1,2], [2,3], [3,4], [4,5], [5,0],
    // Side edges (base to apex)
    [0,6], [1,6], [2,6], [3,6], [4,6], [5,6]
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

const GlowingPyramid = () => {
  return (
    <div className="w-full h-64 flex-center">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <group scale={2}>
          <HexagonalPyramidEdges />
        </group>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2} 
          minPolarAngle={0} // Allow viewing from top
          maxPolarAngle={Math.PI/2}
        />
      </Canvas>
    </div>
  );
};

export default GlowingPyramid;