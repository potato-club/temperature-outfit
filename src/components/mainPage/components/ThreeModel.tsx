import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { LightController, Model } from './index';
import { WeatherStatusType } from 'types/mainPage';
import Image from 'next/image';

interface Prop {
  weatherStatus: WeatherStatusType;
}

export const ThreeModel = ({ weatherStatus }: Prop) => {
  return (
    <Container>
      {/* <Canvas> */}
      {/* <Model weatherStatus={weatherStatus} /> */}
      {/* <LightController /> */}
      {/* </Canvas> */}
      <Image src={`/weatherModel/${weatherStatus}.gif`} width={164} height={150} alt="weather"/>
    </Container>
  );
};

const Container = styled.section`
  width: 20%;
  text-align: center;
`;
