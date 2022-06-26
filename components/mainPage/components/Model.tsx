import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import sunGlb from '../public/sun.glb';
import { lazy, useRef } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, ObjectMap, useFrame, useLoader } from "@react-three/fiber";
export const Model: NextPage = () => {

  const modelRef = useRef<THREE.Mesh>(null);

  const typeGard = (data: (GLTF & ObjectMap) | (GLTF & ObjectMap)[]) => {
    if (Array.isArray(data)) {
      return;
    }
    return data;
  };

  useFrame(() => {
    modelRef.current!.rotation.y += 0.05;
  });
  const gltf = typeGard(useLoader(GLTFLoader, "/weatherModel/sun.glb"));

  return (
      <mesh position={[0, 0, 0]} ref={modelRef}>
        <primitive object={gltf!.scene} scale={1} />
        {/* <primitive object={gltf.scene} scale={4} /> */}
      </mesh>
  );
};

