import { Canvas } from "@react-three/fiber";

import Earth from "./Earth";

import "./EarthModel.css";

function EarthModel() {
  return (
    <section className="earth-container">
      <Canvas
        camera={{ position: [5, 3, 0.1], near: 0.1, far: 1000 }}
        pixelRatio={2}
      >
        <directionalLight
          color={0xfff6e5}
          intensity={1.5}
          position={(0, 10, 10)}
        />
        <Earth position={[0, 0, 0]} />
      </Canvas>
    </section>
  );
}

export default EarthModel;