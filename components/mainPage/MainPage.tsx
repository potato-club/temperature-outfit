import styled from '@emotion/styled'
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { color } from 'constants/index';
import { TypoGraphy } from 'components/common';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
export function MainPage() {
  return (
    <Container>
      <TodayInfo>
        <IconWrapper>
          <BsFillSunFill fill="#d6d667" size={80} />
        </IconWrapper>
        <LocationInfo>
          <Location>
            <IoLocationOutline size={40} />
            <TypoGraphy type="h3" color={color.brandColor5} fontWeight="bold">
              서울특별시
            </TypoGraphy>
          </Location>
          <TypoGraphy type="Title" color={color.brandColor5}>
            12도
          </TypoGraphy>
          <Temperatures>
            <BsArrowUp color="F0771F" size={40} />
            <TypoGraphy type="body1" color={color.brandColor5}>
              최고 15
            </TypoGraphy>
            <BsArrowDown color="499CCE" size={40} />
            <TypoGraphy type="body1" color={color.brandColor5}>
              최저 5
            </TypoGraphy>
          </Temperatures>
          <TypoGraphy type="h3" color={color.brandColor5}>
            체감온도 : 14
          </TypoGraphy>
        </LocationInfo>
        <TodayClothes>
          <TodayBestBox>
            <TypoGraphy type="h3" color={color.brandColor5} fontWeight="bold">
              Today Best
            </TypoGraphy>
            <RankingWrapper>
              <TypoGraphy type="h4" fontWeight="bold" color={color.brandColor5}>
                상위 1위 : <div>스웨터</div>
              </TypoGraphy>
              <TypoGraphy type="h4" fontWeight="bold" color={color.brandColor5}>
                하위 1위 : <div>청바지</div>
              </TypoGraphy>
            </RankingWrapper>
          </TodayBestBox>
          <TextWrapper>
          <TypoGraphy type="h3" color={color.brandColor5}>
            오늘 날씨에서 유저분들이 가장 많이 입으신 옷은 ‘스웨터’ 입니다.
          </TypoGraphy>
          </TextWrapper>
        </TodayClothes>
      </TodayInfo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.div`
  width: 20%;
  text-align: center;
`;
const TodayInfo = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 820px;
  height: 300px;
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  width: 30%;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

const Temperatures = styled.div`
  display: flex;
  align-items: center;
`;

const TodayClothes = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 24px 0;
`;

const TodayBestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  border: 3px solid ${color.brandColor5};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 80px;
  max-width: 320px;
  gap: 8px 0;
`;
const RankingWrapper = styled.div`
  display: flex;
  gap: 0px 8px;
  div div:nth-last-child(1) {
    display: inline-block;
    font-weight: normal;
  }
`;

const TextWrapper = styled.div`
  div {
    padding-right: 10%;
  }
`;