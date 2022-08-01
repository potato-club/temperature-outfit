import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { mainDummyType } from 'dummy/MainDummy';
import React from 'react';
import { ThreeModel, LocationInfo, TodayClothes } from './index';

export function TodayInfo(props: mainDummyType) {
  return (
    <Container>
      <ThreeModel weather={props.weather} />
      <LocationInfo {...props} />
      <TodayClothes {...props} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 820px;
  height: 240px;
`;

