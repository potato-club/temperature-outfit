import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { LightController, Model } from './index';
type Props = {
  weatherStatus: 'sun' | 'cloud' | 'rain' | 'snow';
};
export const ThreeModel = ({ weatherStatus }: Props) => {
  return (
    <Container>
      <Canvas>
        <Model weatherStatus={weatherStatus} />
        <LightController />
      </Canvas>
    </Container>
  );
};

const Container = styled.section`
  width: 20%;
  text-align: center;
`;
