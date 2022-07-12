import styled from '@emotion/styled';
import { mainDummy } from 'dummy/MainDummy';
import React from 'react';
import { MainCody, RegisterBtn, TodayInfo } from './components';

export function MainPage() {

  return (
    <Container>
      <TodayInfo {...mainDummy} />
      <MainCody />
      <RegisterBtn />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
`;
