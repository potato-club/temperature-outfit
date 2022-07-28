import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { LightController, Model } from './index';
type Props = {
  weather: string;
};
export const ThreeModel = ({ weather }: Props) => {
  return (
    <Container>
      <Canvas>
        <Model weather={weather} />
        <LightController />
      </Canvas>
    </Container>
  );
};

const Container = styled.section`
  width: 20%;
  text-align: center;
`;