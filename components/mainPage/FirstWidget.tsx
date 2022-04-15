import { DivBox, TypoGraphy } from 'components/common';
import { GoLocation } from 'react-icons/go';
import { TiWeatherSunny } from 'react-icons/ti';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/Ai';
import { color } from 'constants/index';
import styled from '@emotion/styled';

export const FirstWidget = () => {
  return (
    <WidgetContainer>
      <DivBox width={448} height={240}>
        <LocationInfo>
          <GoLocation size="24" />
          <LocationInfo2>
            <TypoGraphy>서울특별시</TypoGraphy>
          </LocationInfo2>
        </LocationInfo>
        <WeatherInfo>
          <Div>
            <TiWeatherSunny size="120" />
            <TypoGraphy type={'h3'} textAlign={'center'}>
              맑음
            </TypoGraphy>
          </Div>
          <WeatherInfoTemp>
            <TypoGraphy
              type={'Title'}
              textAlign={'center'}
              color={color.brandColor5}>
              12도
            </TypoGraphy>
            <TypoGraphy textAlign={'center'}>어제보다 5도 높아요</TypoGraphy>
            <WeatherInfoTempDetail>
              <AiOutlineArrowDown style={{ color: '499CCE' }} />
              <TypoGraphy>5</TypoGraphy>
              <AiOutlineArrowUp style={{ color: 'F0771F' }} />
              <TypoGraphy>15</TypoGraphy>
              <TypoGraphy>체감14</TypoGraphy>
            </WeatherInfoTempDetail>
          </WeatherInfoTemp>
        </WeatherInfo>
      </DivBox>
    </WidgetContainer>
  );
};

const Div = styled.div``;

const WidgetContainer = styled.div`
  position: relative;
  padding: 32px;
  display: flex;
`;

const WeatherInfoTemp = styled.div`
  padding: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const LocationInfo = styled.div`
  position: relative;
  display: flex;
  top: -16px;
`;

const LocationInfo2 = styled.div`
  position: relative;
  padding: 8px;
`;

const WeatherInfoTempDetail = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

const WeatherInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
