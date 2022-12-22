import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import cloth1 from 'assets/img/cloth/1.jpg';
import cloth2 from 'assets/img/cloth/2.jpg';
import cloth3 from 'assets/img/cloth/3.jpg';

export const LeftSpin: React.FC = () => {
  return (
    <Wrapper>
      <Circle></Circle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 0;
  transform: translate(-75%, 0);
  overflow: hidden;
`;
const Circle = styled.div`
  display: flex;
  flex-direction: relative;
  width: 100vw;
  height: 100vw;
  border-radius: 50%;
  border: 4px dotted #838282;
  animation: spin 130s linear infinite;
`;
