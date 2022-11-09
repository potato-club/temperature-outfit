import styled from '@emotion/styled';
import React from 'react';
import { ThreeModel, LocationInfo } from './index';
import { WeatherStatusType } from 'types/mainPage';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';

interface Props {
  weatherStatus: WeatherStatusType;
  temperature: string;
}

export function TodayInfo({ weatherStatus, temperature }: Props) {
  const weatherTypeText = (type: WeatherStatusType) => {
    switch (type) {
      case 'sun':
        return (
          <>
            <WhiteSpan>맑아요</WhiteSpan> <br /> 즐거운 하루 보내세요
          </>
        );
      case 'cloud':
        return (
          <>
            <WhiteSpan>흐려요</WhiteSpan> <br /> 즐거운 하루 보내세요
          </>
        );
      case 'rain':
        return (
          <>
            <WhiteSpan>비가 와요</WhiteSpan>
            <br />
            우산을 챙기세요
          </>
        );
      case 'snow':
        return (
          <>
            <WhiteSpan>눈이 와요</WhiteSpan>
            <br />
            눈사람 만드시는 거 어때요?
          </>
        );
    }
  };

  return (
    <Container>
      <ThreeModel weatherStatus={weatherStatus} />
      <LocationInfo temperature={temperature} />
      <TypoGraphy
        type="h1"
        color={customColor.brandColor4}
        fontWeight="bold"
        fontHeight="32px">
        오늘은 {weatherTypeText(weatherStatus)}
      </TypoGraphy>
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
const WhiteSpan = styled.span`
  color: ${customColor.white};
`;
