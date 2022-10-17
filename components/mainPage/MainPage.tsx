import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { mainDummy } from 'dummy/MainDummy';
import { MainCody, RegisterBtn, TodayInfo } from './components';
import { suggestionApi, weatherApi } from 'api';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';

type weatherStatusType = 'sun' | 'cloud' | 'rain' | 'snow';

export function MainPage() {
  const todayStr = new Date().toISOString().replace(/T.*$/, '');

  const { locationId } = useRecoilValue(userState);
  const [weatherStatus, setWeatherStatus] = useState<weatherStatusType>('sun');
  const [suggestions, setSuggestions] = useState([]);
  const [temperature, setTemperature] = useState('');

  const getTodayWeather = useCallback(async () => {
    try {
      const {
        data: { status, temperature },
      } = await weatherApi.getWeather(todayStr, locationId);
      setWeatherStatus(status);
      setTemperature(temperature);
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
    } = await suggestionApi.suggestion(temperature);

    setSuggestions(outfits);
  }, [temperature]);

  useEffect(() => {
    getSuggestion();
  }, [getSuggestion]);

  return (
    <Container>
      <TodayInfo
        weatherStatus={weatherStatus}
        locationId={locationId}
        temperature={temperature}
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
