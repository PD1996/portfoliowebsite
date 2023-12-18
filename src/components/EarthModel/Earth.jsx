/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: kongle (https://sketchfab.com/minecraftnorge)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/earth-63d902b12fd14868b4dc2f19dc21d7c2
Title: Earth
*/

import React, { useRef, useEffect } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";

import * as THREE from "three";

function Earth(props) {
  const earthRef = useRef();
  const { nodes, materials } = useGLTF("./earth.glb");

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 10;
  });

  useEffect(() => {
    if (earthRef.current) {
      const box = new THREE.Box3().setFromObject(earthRef.current);
      const center = box.getCenter(new THREE.Vector3());
      console.log(center);
      earthRef.current.position.sub(center);
    }
  }, []);

  return (
    <a.group ref={earthRef} {...props}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.moon} />
    </a.group>
  );
}

export default Earth;
