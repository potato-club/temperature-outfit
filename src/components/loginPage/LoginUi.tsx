import React from 'react';
import styled from '@emotion/styled';
import { GoogleLogin } from './GoogleLogin';
import Image from 'next/image';
import fountainPen from 'assets/img/fountainPen.png';
import { TypoGraphy } from 'components/common';

export const LoginUi: React.FC = () => {
  return (
    <Wrap>
      <OutWrap>
        <InWrap>
          <Title>
            &quot;Would you like to join us?&quot;
            <Image
              src={fountainPen}
              alt="fountainPen"
              height="120px"
              width="120px"
            />
          </Title>
          <SubTitle>
            <TypoGraphy type="Title" color={'gray'}>
              날씨에 따라 당신의 코디를 기록하세요
            </TypoGraphy>
          </SubTitle>

          <GoogleLogin />
          <Footer>From.ChocoStick</Footer>
        </InWrap>
      </OutWrap>
    </Wrap>
  );
};
const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutWrap = styled.section`
  border: 4px solid black;
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InWrap = styled.section`
  width: calc(80vw - 10px);
  height: calc(80vh - 10px);
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const Title = styled.article`
  display: flex;
  text-align: center;
  font-size: 60px;
  font-family: serif;
  align-items: flex-end;
`;

const SubTitle = styled.article``;

const Footer = styled.article`
  font-size: 20px;
  font-family: serif;
  align-self: flex-end;
  position: absolute;
  bottom: 28px;
  right: 28px;
`;
