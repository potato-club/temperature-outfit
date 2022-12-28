import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { IoLocationSharp } from 'react-icons/io5';
import { locations, userState } from 'recoil/atom';
import { useRecoilValue } from 'recoil';

interface LocationInfoProps {
  temperature: string;
}

export const LocationInfo = ({ temperature }: LocationInfoProps) => {
  const allLocations = useRecoilValue(locations);
  const { locationId } = useRecoilValue(userState);
  const [myLocationName, setMyLocationName] = useState('');

  useEffect(() => {
    const findLocation = allLocations.find(
      (location) => location.id === locationId,
    );
    findLocation && setMyLocationName(findLocation.name);
  }, [myLocationName, locationId, allLocations]);

  return (
    <Container>
      <Location>
        <IoLocationSharp size={18} color={customColor.brandColor4} />
        <Span>
          <TypoGraphy
            type="body2"
            color={customColor.brandColor4}
            fontWeight="bold">
            {myLocationName}
          </TypoGraphy>
        </Span>
      </Location>
      <TypoGraphy type="h4" color={customColor.brandColor4} fontWeight="bold">
        현재 <Bold>{temperature}°C</Bold>
      </TypoGraphy>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 22%;
  margin-right: 20px;
  align-items: flex-end;
`;

const Location = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
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
  box-shadow: 0px 4px 4px #aaaaaa;
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
const SmallSpan = styled.span`
  font-size: 20px;
`;
const Span = styled.span`
  margin-top: 4px;
`;
const Bold = styled.span`
  font-size: 22px;
`;
