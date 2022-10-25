import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MainCody, RegisterBtn, TodayInfo } from './components';
import { suggestionApi, weatherApi } from 'api';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';
import { todayString } from 'constants/index';
import { WeatherStatusType } from 'types/mainPage';
import { useQueries } from 'react-query';
import { Suggestions } from 'types/mainPage';

export function MainPage() {
  const { locationId } = useRecoilValue(userState);
  const [weatherStatus, setWeatherStatus] = useState<WeatherStatusType>('sun');
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const [temperature, setTemperature] = useState('');

  useQueries([
    {
      queryKey: ['getWeather', locationId],
      queryFn: () => weatherApi.getWeather(todayString, locationId),
      onSuccess: ({ data: { status, temperature } }: any) => {
        setWeatherStatus(status);
        setTemperature(temperature);
      },
    },
    {
      queryKey: ['getSuggestion'],
      queryFn: () => suggestionApi.suggestion(temperature),
      onSuccess: ({ data: { outfits } }: any) => {
        setSuggestions(outfits);
      },
    },
  ]);

  return (
    <Container>
      <TodayInfo weatherStatus={weatherStatus} temperature={temperature} />
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
