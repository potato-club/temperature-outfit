import React from 'react';
import styled from '@emotion/styled';
import { GoogleLogin } from './GoogleLogin';
import Image from 'next/image';
import fountainPen from 'assets/img/fountainPen.png';

export const LoginUi: React.FC = () => {
  return (
    <Wrap>
      <OutWrap>
        <InWrap>
          <Title>
            &quot;Would you like to join us?&quot;
            <MainIcon>
              <Image src={fountainPen} alt="구글 로고" />
            </MainIcon>
          </Title>

          <SubTitle>날씨의 따른 당신의 코디를 기록하세요</SubTitle>

          <GoogleLogin />

          <Footer>From.ChocoStick</Footer>
        </InWrap>
      </OutWrap>
    </Wrap>
  );
};
const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutWrap = styled.section`
  border: 4px solid black;
  width: 1892px;
  height: 1052px;
  padding: 28px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InWrap = styled.section`
  width: 1836px;
  height: 996px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.section`
  font-size: 64px;
  font-family: serif;
`;

const MainIcon = styled.section`
  width: 224px;
`;

const SubTitle = styled.section`
  font-size: 40px;
  color: gray;
  margin: 72px;
`;

const Footer = styled.section`
  font-size: 20px;
  font-family: serif;
  align-self: flex-end;
  position: absolute;
  bottom: 28px;
  right: 28px;
`;
