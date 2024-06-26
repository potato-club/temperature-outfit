import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Guide, RegisterBtn, Slide, TodayInfo } from './components';
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

      {suggestions.length > 0 ? (
        <Slide suggestions={suggestions} />
      ) : (
        <Guide />
      )}
      <RegisterBtn />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1178px;
  height: calc(100vh - 44px);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  gap: 5% 0;
  margin-top: 44px;
`;
