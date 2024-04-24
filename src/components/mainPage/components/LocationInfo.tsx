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
        현재 <Bold>1.5°C</Bold>
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

const Span = styled.span`
  margin-top: 4px;
`;

const Bold = styled.span`
  font-size: 22px;
`;