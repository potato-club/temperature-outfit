import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import bluejacket from 'assets/img/background/fall/f1.jpg';

export const LayoutContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-image: url('/winter/w11.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  // 배경화면 알아보기
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
