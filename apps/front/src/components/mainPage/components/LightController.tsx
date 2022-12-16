import React from "react";

export const LightController = () => (
  <>
    <ambientLight intensity={0.4} />
    <hemisphereLight />
    <spotLight position={[20, 20, 10]} intensity={4} />
  </>
);


// directionalLight : 태양광 이라고 생각하면 됨.

// ambientLight : 조명 / 빛의 방향이 없기 때문에 그림자 X

// pointLight : 동그란 광원이 있다고 생각하면 됨.

// position : x, y, z 값이며, intensity 는 빛의 세기를 뜻함.