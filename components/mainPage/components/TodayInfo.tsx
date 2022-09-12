import styled from '@emotion/styled';
import { mainDummyType } from 'dummy/MainDummy';
import React, { useCallback, useEffect, useState } from 'react';
import { ThreeModel, LocationInfo, TodayClothes } from './index';
import { weatherApi } from 'api';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';

type weatherStatusType = 'sun' | 'cloud' | 'rain' | 'snow';
type totalTemperatureType = {
  highestTemperature: number;
  temperature: number;
  lowestTemperature: number;
};

export function TodayInfo(props: mainDummyType) {
  const todayStr = new Date().toISOString().replace(/T.*$/, '');

  const { locationId } = useRecoilValue(userState);
  const [weatherStatus, setWeatherStatus] = useState<weatherStatusType>('sun');
  const [totalTemperature, setTotalTemperature] =
    useState<totalTemperatureType>({});

  const getTodayWeather = useCallback(async () => {
    try {
      const {
        data: { status, highestTemperature, lowestTemperature, temperature },
      } = await weatherApi.getWeather(todayStr, locationId);
      setWeatherStatus(status);
      setTotalTemperature({
        highestTemperature,
        temperature,
        lowestTemperature,
      });
    } catch (error) {
      console.log(error);
    }
  }, [locationId, todayStr]);

  useEffect(() => {
    getTodayWeather();
  }, [getTodayWeather]);

  return (
    <Container>
      <ThreeModel weatherStatus={weatherStatus} />
      <LocationInfo
        locationId={locationId}
        totalTemperature={totalTemperature}
      />
      <TodayClothes {...props} />
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
