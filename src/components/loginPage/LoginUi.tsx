import React from 'react';
import styled from '@emotion/styled';
import { GoogleLogin } from './index';
import Image from 'next/image';
import { SpinIMG, TypoGraphy } from 'components/common';
import TypeIt from 'typeit-react';
import { customColor } from 'constants/index';

export const LoginUi: React.FC = () => {
  const loginComment: string = '날씨에 따라 당신의 코디를 기록하세요';
  return (
    <Wrap>
      <SpinIMG />
      <OutWrap>
        <InWrap>
          <Deco>
            <Image
              src={'/decoration/stamp.png'}
              width={500}
              height={500}
              alt={'lace'}
            />
          </Deco>

          <Title>&quot;Would you like to join us?&quot;</Title>

          <SubTitle>
            <TypoGraphy type="h4" fontWeight="bold" color={customColor.login}>
              <TypeIt
                options={{
                  strings: [loginComment],
                  speed: 120,
                  waitUntilVisible: true,
                  loop: true,
                  loopDelay: 5000,
                }}
              />
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
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 200px 0;
`;

const InWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.article`
  display: flex;
  z-index: 5;
  text-align: center;
  font-size: 28px;
  font-style: italic;
  font-weight: 500;
  color: black;
  align-items: flex-end;
  letter-spacing: -1.5px;
  font-family: sans-serif;
`;

const SubTitle = styled.article`
  margin-top: 20px;
  z-index: 5;
`;

const Footer = styled.article`
  display: flex;
  position: absolute;
  font-size: 17px;
  font-weight: 500;
  color: gray;
  bottom: 24px;
`;
const Deco = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
`;
