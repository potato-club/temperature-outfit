import styled from '@emotion/styled';
import React from 'react';
import { ThreeModel, LocationInfo } from './index';
import { WeatherStatus } from '@temperature-outfit/core';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';

interface Props {
  weatherStatus: WeatherStatus;
  temperature: string;
}

export function TodayInfo({ weatherStatus, temperature }: Props) {
  const weatherTypeText = (type: WeatherStatus) => {
    switch (type) {
      case 'sun':
        return (
          <>
            <WhiteSpan>맑아요</WhiteSpan> <br />{' '}
            <SmallSpan>즐거운 하루 보내세요 :)</SmallSpan>
          </>
        );
      case 'cloud':
        return (
          <>
            <WhiteSpan>흐려요</WhiteSpan> <br />
            <SmallSpan>즐거운 하루 보내세요 :)</SmallSpan>
          </>
        );
      case 'rain':
        return (
          <>
            <WhiteSpan>비가 와요</WhiteSpan>
            <br />
            <SmallSpan>우산을 챙기세요 :)</SmallSpan>
          </>
        );
      case 'snow':
        return (
          <>
            <WhiteSpan>눈이 와요</WhiteSpan>
            <br />
            <SmallSpan>눈사람 만드시는 거 어때요? :)</SmallSpan>
          </>
        );
    }
  };

  return (
    <Container>
      <ThreeModel weatherStatus={weatherStatus} />
      <TypoGraphy
        type="h1"
        color={customColor.brandColor4}
        fontWeight="bold"
        fontHeight="32px">
        오늘은 {weatherTypeText(weatherStatus)}
      </TypoGraphy>
      <Vr />
      <LocationInfo temperature={temperature} />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: ${customColor.white + '4'};
  border-radius: 12px;
  box-shadow: 2px 2px 5px -1px ${customColor.grayDark + '3'};
  width: 620px;
  height: 200px;
`;

const WhiteSpan = styled.span`
  color: ${customColor.white};
`;

const SmallSpan = styled.span`
  font-size: 18px;
`;
const Vr = styled.div`
  width: 3px;
  height: 60%;
  margin: 54px;
  background-color: ${customColor.backgroundBlue_opacity};
`;
