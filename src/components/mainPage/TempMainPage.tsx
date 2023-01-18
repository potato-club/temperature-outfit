import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MainCody, RegisterBtn, TempSlide, TodayInfo } from './components';
import { suggestionApi, weatherApi } from 'api';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';
import { koreaToday } from 'constants/index';
import { WeatherStatusType } from 'types/mainPage';
import { useQueries } from 'react-query';
import { Suggestions } from 'types/mainPage';
import { errorModal } from 'utils/interactionModal';
import { Guide } from './components/Guide';

export function TempMainPage() {
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
      {/* 날씨랑 온도 */}
      <TodayInfo weatherStatus={weatherStatus} temperature={temperature} />

      {/* // TODO : 제안된 코디에 슬라이드 적용 */}
      {/* <MainCody suggestions={suggestions} /> */}
      {suggestions.length > 0 ? (
        <TempSlide suggestions={suggestions} />
      ) : (
        <Guide />
      )}
      {/* 코디 등록 버튼 */}
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
  gap: 10px;
  margin-top: 44px;
`;
