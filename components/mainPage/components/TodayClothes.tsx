import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { mainDummyType } from 'dummy/MainDummy';
import React from 'react';

export function TodayClothes(props: mainDummyType) {
  return (
    <Container>
      <TodayBestBox>
        <TypoGraphy type="h3" color={customColor.brandColor5} fontWeight="bold">
          Today Best
        </TypoGraphy>
        <RankingWrapper>
          <TypoGraphy
            type="h4"
            fontWeight="bold"
            color={customColor.brandColor5}>
            상의 1위 :{' '}
            <span style={{ display: 'inline-block', fontWeight: 'normal' }}>
              {props.TodayBest.top}
            </span>
          </TypoGraphy>
          <TypoGraphy
            type="h4"
            fontWeight="bold"
            color={customColor.brandColor5}>
            하의 1위 :{' '}
            <span style={{ display: 'inline-block', fontWeight: 'normal' }}>
              {props.TodayBest.bottom}
            </span>
          </TypoGraphy>
        </RankingWrapper>
      </TodayBestBox>
      <TextWrapper>
        <TypoGraphy type="h3" color={customColor.brandColor5}>
          오늘 날씨에서 유저분들이 가장 추천하신 옷은 ‘{props.TodayBest.rankTop}
          ’ 입니다.
        </TypoGraphy>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.section`
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
