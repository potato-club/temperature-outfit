import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { mainDummy } from 'dummy/MainDummy';
import { MainCody, RegisterBtn, TodayInfo } from './components';
import { suggestionApi, weatherApi } from 'api';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';

type weatherStatusType = 'sun' | 'cloud' | 'rain' | 'snow';

type totalTemperatureType = {
  highestTemperature: string;
  temperature: string;
  lowestTemperature: string;
};

export function MainPage() {
  const todayStr = new Date().toISOString().replace(/T.*$/, '');

  const { locationId } = useRecoilValue(userState);
  const [weatherStatus, setWeatherStatus] = useState<weatherStatusType>('sun');
  const [suggestions, setSuggestions] = useState([]);
  const [totalTemperature, setTotalTemperature] =
    useState<totalTemperatureType>({
      highestTemperature: '0',
      temperature: '0',
      lowestTemperature: '0',
    });

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

  const getSuggestion = useCallback(async () => {
    const {
      data: { outfits },
    } = await suggestionApi.suggestion(totalTemperature.temperature);

    setSuggestions(outfits);
  }, [totalTemperature]);

  useEffect(() => {
    getSuggestion();
  }, [getSuggestion]);

  return (
    <Container>
      <TodayInfo
        weatherStatus={weatherStatus}
        locationId={locationId}
        totalTemperature={totalTemperature}
      />
      <MainCody suggestions={suggestions} />
      <RegisterBtn />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
`;
