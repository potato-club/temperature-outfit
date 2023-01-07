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

// Todo : 들어갈 사진 8개 선정

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
      <RelativeBox>
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
      </RelativeBox>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;

const RelativeBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Section = styled.section<Right>`
  top: ${(props) => (props.right ? '-10vh' : '70vh')};
  right: ${(props) => (props.right ? '-30vh' : '200vh')};
  transform: translate(-50%, -50%);
  position: absolute;
  animation: spin 130s linear infinite;
`;

const Inner = styled.article<InnerProps>`
  top: 50%;
  left: 50%;
  width: 16vw;
  height: 40vh;
  background: #63c4d1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
  transition: opacity 1s, transform 1s;
  transform: ${(props) => `rotate(${props.deg}deg) translateY(-150%)`};
`;
