import { useRef, useState } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ObjectMap, useFrame, useLoader } from '@react-three/fiber';
import { WeatherStatusType } from 'types/mainPage';

type Props = {
  weatherStatus: WeatherStatusType;
};

export const Model = ({ weatherStatus }: Props) => {
  const modelRef = useRef<THREE.Mesh>(null);
  const frameCount = useRef(0);
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
    useLoader(GLTFLoader, `/weatherModel/${weatherStatus}.glb`),
  );

  useFrame(async () => {
    if (animate) {
      modelRef.current!.rotation.y += Math.PI / 60;
      frameCount.current += 1;
      if (frameCount.current % 60 === 0) {
        setAnimate(false);
        await wait(1000);
        setAnimate(true);
      }
    }
  });

  return (
      <mesh ref={modelRef} onDoubleClick={() => setAnimate((cur) => !cur)}>
        <primitive object={gltf!.scene} scale={1} />
      </mesh>
  );
};
