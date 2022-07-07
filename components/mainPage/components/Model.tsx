import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ObjectMap, useFrame, useLoader } from '@react-three/fiber';

export const Model: NextPage = () => {
  const modelRef = useRef<THREE.Mesh>(null);
  // const animate = useRef(true);
  // const setAnimate = (state: boolean) => {
  //   animate.current = state;
  // };
  const [animate, setAnimate] = useState<boolean>(true);

  const wait = (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  const typeGard = (data: (GLTF & ObjectMap) | (GLTF & ObjectMap)[]) => {
    if (Array.isArray(data)) {
      return;
    }
    return data;
  };

  const gltf = typeGard(
    useLoader(GLTFLoader, '/weatherModel/sunRetopology.glb'),
  );

  useFrame(async () => {
    if (animate) {
      modelRef.current!.rotation.y += Math.PI / 60;
      // 부동소수점오류 해결
      if (+(modelRef.current!.rotation.y % Math.PI).toFixed(1) === 0) {
        setAnimate(false);
        await wait(1000);
        setAnimate(true);
      }
    }
  });

  return (
    <mesh position={[0, 0, 0]} ref={modelRef}>
      <primitive object={gltf!.scene} scale={1} />
    </mesh>
  );
};
