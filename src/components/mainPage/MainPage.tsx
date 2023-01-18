import React, { useState } from 'react';
import styled from '@emotion/styled';
import { RegisterBtn, TodayInfo } from './components';
import { suggestionApi, weatherApi } from 'api';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';
import { koreaToday } from 'constants/index';
import { WeatherStatusType } from 'types/mainPage';
import { useQueries } from 'react-query';
import { Suggestions } from 'types/mainPage';
import { errorModal } from 'utils/interactionModal';

export function MainPage() {
  const { locationId } = useRecoilValue(userState);
  const [weatherStatus, setWeatherStatus] = useState<WeatherStatusType>('sun');
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const [temperature, setTemperature] = useState('');

  useQueries([
    {
      queryKey: ['getWeather', locationId],
      queryFn: () => weatherApi.getWeather(koreaToday, locationId),
      onSuccess: ({ data: { status, temperature } }: any) => {
        setWeatherStatus(status);
        setTemperature(temperature);
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
    {
      queryKey: ['getSuggestion'],
      queryFn: () => suggestionApi.suggestion(temperature),
      onSuccess: ({ data: { outfits } }: any) => {
        setSuggestions(outfits);
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  ]);

  return (
    <Container>
      <TodayInfo weatherStatus={weatherStatus} temperature={temperature} />
      <RegisterBtn />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
