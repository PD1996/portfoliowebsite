import React, { useRef, useEffect } from "react";

import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

import * as THREE from "three";

function Earth(props) {
  const groupRef = useRef();
  const earthRef = useRef();
  const { nodes, materials } = useGLTF("./earth.glb");

  const { scale } = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1.2, 1.2, 1.2] },
  });

  useEffect(() => {
    if (earthRef.current) {
      const box = new THREE.Box3().setFromObject(earthRef.current);
      const center = box.getCenter(new THREE.Vector3());
      earthRef.current.position.sub(center);
    }
  }, []);

  return (
    <a.group ref={groupRef} scale={scale} {...props}>
      <mesh
        ref={earthRef}
        geometry={nodes.Object_2.geometry}
        material={materials.moon}
      />
    </a.group>
  );
}

export default Earth;
