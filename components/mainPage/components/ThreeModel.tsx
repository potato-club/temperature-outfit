import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { LightController, Model } from './index';
import { WeatherStatusType } from 'types';

interface Prop {
  weatherStatus: WeatherStatusType;
}

export const ThreeModel = ({ weatherStatus }: Prop) => {
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
