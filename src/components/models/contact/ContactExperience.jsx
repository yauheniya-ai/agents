import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EarthGlobeHologram } from "./Earth_globe_hologram";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />


      <group scale={5} position={[0, -0.8, -2]} castShadow>
        <EarthGlobeHologram />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
