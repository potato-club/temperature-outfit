import styled from '@emotion/styled';
import React from 'react';
import { ThreeModel, LocationInfo, TodayClothes } from './index';

interface Props {
  weatherStatus: any;
  temperature: string;
}

export function TodayInfo({
  weatherStatus,
  temperature,
}: Props) {
  return (
    <Container>
      <ThreeModel weatherStatus={weatherStatus} />
      <LocationInfo
        temperature={temperature}
      />
      {/* <TodayClothes {...props} /> */}
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
