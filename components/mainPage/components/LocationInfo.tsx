import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { mainDummyType } from 'dummy/MainDummy';

export const LocationInfo = (props: mainDummyType) => {
  return (
    <Container>
      <Location>
        <IoLocationOutline size={40} />
        <TypoGraphy type="h3" color={customColor.brandColor5} fontWeight="bold">
          {props.location}
        </TypoGraphy>
      </Location>
      <TypoGraphy type="Title" color={customColor.brandColor5}>
        평균 {props.average}°C
      </TypoGraphy>
      <Temperatures>
        <BsArrowUp color="F0771F" size={40} />
        <TypoGraphy type="body1" color={customColor.brandColor5}>
          최고 <span style={{ display: 'inline-block' }}>{props.max}°C</span>
        </TypoGraphy>
        <BsArrowDown color="499CCE" size={40} />
        <TypoGraphy type="body1" color={customColor.brandColor5}>
          최저 <span style={{ display: 'inline-block' }}>{props.min}°C</span>
        </TypoGraphy>
      </Temperatures>
    </Container>
  );
};



const Container = styled.section`
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
