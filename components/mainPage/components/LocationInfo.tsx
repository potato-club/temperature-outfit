import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { locations } from 'recoil/atom';
import { useRecoilValue } from 'recoil';

interface LocationInfoProps {
  locationId: number;
  temperature: string;
}

export const LocationInfo = ({
  locationId,
  temperature,
}: LocationInfoProps) => {
  const allLocations = useRecoilValue(locations);
  const userLocation = allLocations.find((data) => data.id === locationId);

  return (
    <Container>
      <Location>
        <IoLocationOutline size={40} />
        <TypoGraphy type="h3" color={customColor.brandColor5} fontWeight="bold">
          {userLocation!.name}
        </TypoGraphy>
      </Location>
      <TypoGraphy type="Title" color={customColor.brandColor5}>
        현재 {temperature}°C
      </TypoGraphy>
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
