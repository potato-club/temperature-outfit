import React from 'react';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { IoUmbrella } from 'react-icons/io5';
import { BsFillCloudFill, BsSnow2, BsSunFill } from 'react-icons/bs';
import Image from 'next/image';
import clip from 'assets/img/clip.png';

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
      <ClipTag>
        <Image src={clip} alt="clip" width="100%" height="100%" />
      </ClipTag>
      <WeatherIcon>{iconSelect(weatherStatus)}</WeatherIcon>
      <DateInfo>
        <Temperature>
          <TypoGraphy type={'body2'} color="white">
            온도 <Bold>{temperature}°C</Bold>
          </TypoGraphy>
        </Temperature>
        <TypoGraphy type={'body2'} color="white">
          평점 <Bold>{rating}</Bold>
        </TypoGraphy>
      </DateInfo>
    </Date>
  );
};
const Date = styled.section`
  background-color: ${customColor.darkSky};
  padding: 12px;
  margin: 0px 4px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;
  height: 80px;
  box-shadow: 1px 1px 5px -1px #bbb;
`;
const ClipTag = styled.div`
  display: flex;
  position: absolute;
  width: 24px;
  height: 24px;
  top: -8px;
  left: 8px;
  transform: rotate(60deg);
`;
const WeatherIcon = styled.article`
  display: flex;
  flex: 1;
  font-size: 32px;
  padding-right: 4px;
  align-content: center;
  @media screen and (max-width:1024px){
    position: absolute;
    bottom:6px;
    right:2px;
    font-size:20px;
  }
`;
const DateInfo = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 4px;
  font-size: 14px;
  justify-content: center;
  margin-top:4px;
`;
const Temperature = styled.span`
  margin-bottom: 6px;
`;
const Bold = styled.span`
  font-size: 13px;
  font-weight: bold;
`;
