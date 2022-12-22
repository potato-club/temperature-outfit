import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import cloth1 from 'assets/img/cloth/1.jpg';
import cloth2 from 'assets/img/cloth/2.jpg';
import cloth3 from 'assets/img/cloth/3.jpg';

// Todo : 들어갈 사진 8개 선정

interface InnerProps {
  deg: number;
}
export const LeftSpin: React.FC = () => {
  const temp = Array(8).fill(0);
  const len = temp.length;
  return (
    <Wrapper>
      {temp.map((_, i) => {
        return (
          <RightSection key={i}>
            <Inner deg={45 * i}>
              <Image width="400px" height="484px" alt="clothes" src={cloth2} />
            </Inner>
          </RightSection>
        );
      })}
      {temp.map((_, i) => {
        return (
          <LeftSection key={i}>
            <Inner deg={45 * i}>
              <Image width="400px" height="484px" alt="clothes" src={cloth1} />
            </Inner>
          </LeftSection>
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

const RightSection = styled.section`
  top: -10vh;
  left: 100vw;
  transform: translate(-50%, -50%);
  position: absolute;
  animation: spin 130s linear infinite;
`;
const LeftSection = styled.section`
  top: 70vh;
  right: 100vw;
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
  border-radius: 10px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  transition: opacity 1s, transform 1s;
  transform: ${(props) => `rotate(${props.deg}deg) translateY(-150%)`};
`;
