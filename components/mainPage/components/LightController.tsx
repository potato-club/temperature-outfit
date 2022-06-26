// lightController.jsx
import React from "react";

export const LightController = () => (
  <>
    <directionalLight
      castShadow
      position={[0, 10, 0]}
      intensity={4}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-100}
      shadow-camera-right={100}
      shadow-camera-top={100}
      shadow-camera-bottom={-100}
    />
    <ambientLight intensity={0.4} />
    <pointLight position={[-10, 0, -20]} intensity={0.5} />
    <pointLight position={[0, -10, 0]} intensity={1.5} />
  </>
);

// directionalLight : 태양광 이라고 생각하면 됨.

// ambientLight : 조명 / 빛의 방향이 없기 때문에 그림자 X

// pointLight : 동그란 광원이 있다고 생각하면 됨.

// position : x, y, z 값이며, intensity 는 빛의 세기를 뜻함.