import React from 'react';
import styled from '@emotion/styled';
import { GoogleLogin } from './GoogleLogin';
import Image from 'next/image';
import border from 'assets/img/border.png';
import { SpinIMG, TypoGraphy } from 'components/common';
import TypeIt from 'typeit-react';

export const LoginUi: React.FC = () => {
  const loginComment: string = '날씨에 따라 당신의 코디를 기록하세요';
  return (
    <Wrap>
      <SpinIMG />
      <OutWrap>
        <TopBorder>
          <Image src={border} alt="border" width="280px" height="280px" />
        </TopBorder>
        <InWrap>
          <Title>&quot;Would you like to join us?&quot;</Title>
          <SubTitle>
            <TypoGraphy type="h2">
              <TypeIt
                options={{
                  strings: [loginComment],
                  speed: 120,
                  waitUntilVisible: true,
                  loop: true,
                  loopDelay: 5000,
                }}></TypeIt>
            </TypoGraphy>
          </SubTitle>
        </InWrap>
        <GoogleLogin />
      </OutWrap>
      <Footer>From. ChocoStick</Footer>
    </Wrap>
  );
};
const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const OutWrap = styled.section`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const InWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const TopBorder = styled.div`
  position: absolute;
  top: 0;
  transform: translate(0, calc(-50% - 40px));
`;

const Title = styled.article`
  display: flex;
  text-align: center;
  font-size: 28px;
  font-style: italic;
  font-weight: 100;
  color: #222;
  align-items: flex-end;
  letter-spacing: -1.2px;
  font-family: sans-serif;
`;

const SubTitle = styled.article`
  margin-top: 20px;
`;

const Footer = styled.article`
  display: flex;
  position: absolute;
  font-size: 17px;
  font-weight: 500;
  color: gray;
  bottom: 24px;
`;
