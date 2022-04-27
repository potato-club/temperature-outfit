import React from 'react';
import styled from '@emotion/styled';
import { GoogleLogin } from './GoogleLogin';

// 1. 타이포 그래피
// 2. size 지정했기때문에 현재 데스크탑의 크기에 따라서 화면이 잘 안보임
export const LoginUi: React.FC = () => {
  return (
    <OutWrap>
      <InWrap>
        <Title>
          &quot;Would you like to join us?&quot;
          <MainIcon src="fountainPen.png" />
        </Title>

        <SubTitle>날씨의 따른 당신의 코디를 기록하세요</SubTitle>

        <GoogleLogin />

        <Footer>From.ChocoStick</Footer>
      </InWrap>
    </OutWrap>
  );
};

const OutWrap = styled.div`
  border: 4px solid black;
  width: 1892px;
  height: 1052px;
  padding: 28px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InWrap = styled.div`
  width: 1836px;
  height: 996px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 64px;
  font-family: serif;
`;

const MainIcon = styled.img`
  width: 224px;
`;

const SubTitle = styled.div`
  font-size: 40px;
  color: gray;
  margin: 72px;
`;

const Footer = styled.div`
  font-size: 20px;
  font-family: serif;
  align-self: flex-end;
  position: absolute;
  bottom: 28px;
  right: 28px;
`;
