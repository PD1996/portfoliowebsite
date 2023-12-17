import { Canvas } from "@react-three/fiber";

import Earth from "./Earth";

function EarthModel() {
  return (
    <section>
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <directionalLight color={0xfff6e5} intensity={1.5} />
        <Earth position={[0, 0, -5]} />
      </Canvas>
    </section>
  );
}

export default EarthModel;
