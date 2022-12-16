import React from 'react';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { IoUmbrella } from 'react-icons/io5';
import { BsFillCloudFill, BsSnow2, BsSunFill } from 'react-icons/bs';

interface DateItemProps {
  weatherStatus: string;
  temperature: string;
  rating: string;
}
export const DateItem = ({
  weatherStatus,
  temperature,
  rating,
}: DateItemProps) => {
  const iconSelect = (weather: string) => {
    switch (weather) {
      case 'sun':
        return <BsSunFill />;
      case 'cloud':
        return <BsFillCloudFill />;
      case 'snow':
        return <BsSnow2 />;
      case 'rain':
        return <IoUmbrella />;
      default:
        break;
    }
  };
  return (
    <Date>
      <WeatherIcon>{iconSelect(weatherStatus)}</WeatherIcon>
      <DateInfo>
        <TypoGraphy color="white">
          온도 <Bold>{temperature}°C</Bold>
        </TypoGraphy>
        <TypoGraphy color="white">
          평점 <Bold>{rating}</Bold>
        </TypoGraphy>
      </DateInfo>
    </Date>
  );
};
const Date = styled.section`
  background-color: ${customColor.brandColor3};
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 16px;
`;

const WeatherIcon = styled.article`
  flex: 1;
  font-size: 56px;
  margin-left: 8px;
`;
const DateInfo = styled.article`
  flex: 1;
  margin-right: 4px;
`;
const Bold = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
