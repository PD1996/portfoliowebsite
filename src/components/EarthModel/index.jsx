import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "./Earth";
import "./EarthModel.css";

function EarthModel() {
  return (
    <section className="earth-container">
      <Canvas
        camera={{ position: [5, 3, 0.1], near: 0.1, far: 1000, fov: 45 }}
        pixelratio={2}
      >
        <directionalLight
          color={0xfff6e5}
          intensity={1.5}
          position={(0, 10, 10)}
        />
        <Earth position={[0, 0, 0]} />
        <OrbitControls enableDamping enablePan={false} enableZoom={false} />
      </Canvas>
    </section>
  );
}

export default EarthModel;
