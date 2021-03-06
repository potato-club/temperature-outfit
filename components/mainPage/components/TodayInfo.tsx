import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import React from 'react';
import { BsFillSunFill, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';

export function TodayInfo() {
  return (
    <Container>
      <IconWrapper>
        <BsFillSunFill fill="#d6d667" size={80} />
      </IconWrapper>
      <LocationInfo>
        <Location>
          <IoLocationOutline size={40} />
          <TypoGraphy
            type="h3"
            color={customColor.brandColor5}
            fontWeight="bold">
            서울특별시
          </TypoGraphy>
        </Location>
        <TypoGraphy type="Title" color={customColor.brandColor5}>
          12도
        </TypoGraphy>
        <Temperatures>
          <BsArrowUp color="F0771F" size={40} />
          <TypoGraphy type="body1" color={customColor.brandColor5}>
            최고 <span style={{ display: 'inline-block' }}>15</span>
          </TypoGraphy>
          <BsArrowDown color="499CCE" size={40} />
          <TypoGraphy type="body1" color={customColor.brandColor5}>
            최저 <span style={{ display: 'inline-block' }}>5</span>
          </TypoGraphy>
        </Temperatures>
        <TypoGraphy type="h3" color={customColor.brandColor5}>
          체감온도 : 14
        </TypoGraphy>
      </LocationInfo>
      <TodayClothes>
        <TodayBestBox>
          <TypoGraphy
            type="h3"
            color={customColor.brandColor5}
            fontWeight="bold">
            Today Best
          </TypoGraphy>
          <RankingWrapper>
            <TypoGraphy
              type="h4"
              fontWeight="bold"
              color={customColor.brandColor5}>
              상위 1위 :{' '}
              <span style={{ display: 'inline-block', fontWeight: 'normal' }}>
                스웨터
              </span>
            </TypoGraphy>
            <TypoGraphy
              type="h4"
              fontWeight="bold"
              color={customColor.brandColor5}>
              하위 1위 :{' '}
              <span style={{ display: 'inline-block', fontWeight: 'normal' }}>
                청바지
              </span>
            </TypoGraphy>
          </RankingWrapper>
        </TodayBestBox>
        <TextWrapper>
          <TypoGraphy type="h3" color={customColor.brandColor5}>
            오늘 날씨에서 유저분들이 가장 많이 입으신 옷은 ‘스웨터’ 입니다.
          </TypoGraphy>
        </TextWrapper>
      </TodayClothes>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 820px;
  height: 240px;
`;
const IconWrapper = styled.section`
  width: 20%;
  text-align: center;
`;

const LocationInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  width: 30%;
`;

const Location = styled.section`
  display: flex;
  align-items: center;
`;

const Temperatures = styled.section`
  display: flex;
  align-items: center;
`;

const TodayClothes = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 24px 0;
`;

const TodayBestBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${customColor.white};
  border: 3px solid ${customColor.brandColor5};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 80px;
  max-width: 320px;
  gap: 8px 0;
`;
const RankingWrapper = styled.section`
  display: flex;
  gap: 0px 8px;
`;

const TextWrapper = styled.section`
  div {
    padding-right: 10%;
  }
`;
