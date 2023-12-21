import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "./Earth";
import "./EarthModel.css";

function EarthModel() {
  return (
    <section className="earth-container">
      <Canvas
        camera={{
          position: [5, 3, 3],
          up: [0, 0, 1],
          near: 0.1,
          far: 1000,
          fov: 45,
        }}
        pixelratio={2}
      >
        <directionalLight
          color={0xfff6e5}
          intensity={1.5}
          position={(0, 0, 10)}
        />
        <Earth position={[0, 0, 0]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableDamping
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 - 0.5}
        />
      </Canvas>
    </section>
  );
}

export default EarthModel;
