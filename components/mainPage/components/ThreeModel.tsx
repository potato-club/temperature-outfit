import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { LightController, Model } from './index';
import { WeatherStatus } from 'types';

export const ThreeModel = ({ weatherStatus }: WeatherStatus) => {
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
