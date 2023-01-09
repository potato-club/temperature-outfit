import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import left1 from 'assets/img/loginSpin/left1.png';
import left2 from 'assets/img/loginSpin/left2.jpg';
import left3 from 'assets/img/loginSpin/left3.png';
import left4 from 'assets/img/loginSpin/left4.png';
import left5 from 'assets/img/loginSpin/left5.jpg';
import left6 from 'assets/img/loginSpin/left6.jpg';
import left7 from 'assets/img/loginSpin/left7.jpg';
import left8 from 'assets/img/loginSpin/left8.jpg';
import right1 from 'assets/img/loginSpin/right1.png';
import right2 from 'assets/img/loginSpin/right2.jpg';
import right3 from 'assets/img/loginSpin/right3.png';
import right4 from 'assets/img/loginSpin/right4.jpg';
import right5 from 'assets/img/loginSpin/right5.png';
import right6 from 'assets/img/loginSpin/right6.png';
import right7 from 'assets/img/loginSpin/right7.png';
import right8 from 'assets/img/loginSpin/right8.jpg';
import { keyframes } from '@emotion/react';

interface InnerProps {
  deg: number;
}

interface Right {
  right?: boolean;
}

export const SpinIMG: React.FC = () => {
  const leftIMG = [left1, left2, left3, left4, left5, left6, left7, left8];
  const rightIMG = [
    right1,
    right2,
    right3,
    right4,
    right5,
    right6,
    right7,
    right8,
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
        <Circle />
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
const spin2 = keyframes`
  0% {
    transform:translate(-63%, 63%) rotate(0deg);
  }
  50% {
    transform:translate(-63%, 63%) rotate(180deg);
  }
  100% {
    transform:translate(-63%, 63%) rotate(360deg);
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

const Section = styled.section<Right>`
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

const Inner = styled.article<InnerProps>`
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

const Circle = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  min-width: 1200px;
  max-width: 1800px;
  aspect-ratio: 1/1;
  background: none;
  border-radius: 50%;
  border: 3px dotted #fff;
  bottom: calc(-13% - 36px);
  left: calc(37% - 36px);
  animation: ${spin2} 60s linear infinite;
  opacity: 0.85;
`;
