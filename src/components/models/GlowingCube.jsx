import { Canvas } from '@react-three/fiber'
import { Line, OrbitControls } from '@react-three/drei'

const CubeEdges = () => {
  // Define the 8 corners of the cube
  const points = [
    [-1, -1, -1], // 0
    [ 1, -1, -1], // 1
    [ 1,  1, -1], // 2
    [-1,  1, -1], // 3
    [-1, -1,  1], // 4
    [ 1, -1,  1], // 5
    [ 1,  1,  1], // 6
    [-1,  1,  1], // 7
  ];

  // Define edges by connecting corners (12 edges)
  const edges = [
    [0,1], [1,2], [2,3], [3,0], // bottom square
    [4,5], [5,6], [6,7], [7,4], // top square
    [0,4], [1,5], [2,6], [3,7], // vertical connections
  ];

  return (
    <>
      {edges.map(([start, end], idx) => (
        <Line
          key={idx}
          points={[points[start], points[end]]}
          color="#8b76e9" // purple-100
          lineWidth={8}
        />
      ))}
    </>
  );
};

const GlowingCube = () => {
  return (
    <div className="w-full h-64 flex-center">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <group scale={1.8}>
            <CubeEdges />
        </group>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default GlowingCube;
