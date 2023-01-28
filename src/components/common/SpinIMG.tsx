import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { keyframes } from '@emotion/react';

interface InnerProps {
  deg: number;
}

interface Right {
  right?: boolean;
}

export const SpinIMG: React.FC = () => {
  const leftIMG = [
    '/loginSpin/left1.png',
    '/loginSpin/left2.jpg',
    '/loginSpin/left3.png',
    '/loginSpin/left4.png',
    '/loginSpin/left5.jpg',
    '/loginSpin/left6.jpg',
    '/loginSpin/left7.jpg',
    '/loginSpin/left8.jpg',
  ];
  const rightIMG = [
    '/loginSpin/right1.png',
    '/loginSpin/right2.jpg',
    '/loginSpin/right3.png',
    '/loginSpin/right4.jpg',
    '/loginSpin/right5.png',
    '/loginSpin/right6.png',
    '/loginSpin/right7.png',
    '/loginSpin/right8.jpg',
  ];
  return (
    <Wrapper>
      <WrapperInner>
        {leftIMG.map((imgSrc, i) => {
          return (
            <Section key={i}>
              <Inner deg={45 * i}>
                <RelativeBox>
                  <Image layout="fill" alt="clothes" src={imgSrc} />
                </RelativeBox>
              </Inner>
            </Section>
          );
        })}
        {rightIMG.map((imgSrc, i) => {
          return (
            <Section key={i} right>
              <Inner deg={45 * i}>
                <RelativeBox>
                  <Image layout="fill" alt="clothes" src={imgSrc} />
                </RelativeBox>
              </Inner>
            </Section>
          );
        })}
      </WrapperInner>
    </Wrapper>
  );
};

const spin = keyframes`
  0% {
    transform:translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform:translate(-50%, -50%) rotate(180deg);
  }
  100% {
    transform:translate(-50%, -50%) rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;

const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const RelativeBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Section = styled.article<Right>`
  display: flex;
  position: absolute;
  left: ${(props) => (props.right ? 'calc(100% + 160px)' : '-160px')};
  top: ${(props) => (props.right ? '40px' : 'calc(100% - 40px)')};
  animation: ${spin} 130s linear infinite;
  width: 14%;
  min-width: 200px;
  max-width: 360px;
  aspect-ratio: 9/16;
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.right ? 'none' : 'flex')};
  }
`;

const Inner = styled.div<InnerProps>`
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: #63c4d1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 5px 5px 20px -2px #999;
  transition: opacity 1s, transform 1s;
  transform: ${(props) => `rotate(${props.deg}deg) translateY(-114%)`};
  opacity: 0.85;
`;
