import { LayoutContainer, DivBox, TypoGraphy } from 'components/common';
import type { NextPage } from 'next';
import { GoLocation } from 'react-icons/go';
import { TiWeatherSunny } from 'react-icons/ti';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/Ai';
import { color } from 'constants/index';
import { type } from 'os';
import { title } from 'process';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <WidgetContainer>
        {/* 첫번째 위젯_날씨정보 */}
        <DivBox width={450} height={260}>
          {/* 해당 날씨의 지역 */}
          <LocationInfo>
            <GoLocation size="24" />
            <LocationInfo2>
              <TypoGraphy>서울특별시</TypoGraphy>
            </LocationInfo2>
          </LocationInfo>
          {/* 해당 날씨의 상세 정보 */}
          <WeatherInfo>
            <div>
              <TiWeatherSunny size="120" />
              <TypoGraphy type={'h3'} textAlign={'center'}>
                맑음
              </TypoGraphy>
            </div>
            {/* 날씨 정보, 기온 */}
            <WeatherInfoTemp>
              <TypoGraphy
                type={'Title'}
                textAlign={'center'}
                color={color.brandColor5}>
                12도
              </TypoGraphy>
              {/* 어제 날씨와 비교 */}
              <TypoGraphy textAlign={'center'}>어제보다 5도 높아요</TypoGraphy>
              {/* 최저, 최고, 체감 온도 표시 */}
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

        {/* 두번째 위젯_Today Best */}
        <DivBox width={450} height={260}>
          <TodayBest>
            <TypoGraphy
              type={'Title'}
              color={color.brandColor5}
              fontWeight={'bold'}>
              Today Best
            </TypoGraphy>
          </TodayBest>
          <RankingContainer1>
            <RankingContainer2>
              <Ranking3>
                <TypoGraphy>상의 1위:</TypoGraphy>
                <TypoGraphy>스웨터</TypoGraphy>
              </Ranking3>
              <BoldHr />
              <Ranking3>
                <TypoGraphy>상의 2위:</TypoGraphy>
                <TypoGraphy>스웨터</TypoGraphy>
              </Ranking3>
              <hr />
              <Ranking3>
                <TypoGraphy>상의 3위:</TypoGraphy>
                <TypoGraphy>스웨터</TypoGraphy>
              </Ranking3>
              <hr />
            </RankingContainer2>
            <VerticalHr />
            <RankingContainer2>
              <Ranking3>
                <TypoGraphy>하의 1위:</TypoGraphy>
                <TypoGraphy>청바지</TypoGraphy>
              </Ranking3>
              <BoldHr />
              <Ranking3>
                <TypoGraphy>하의 2위:</TypoGraphy>
                <TypoGraphy>청바지</TypoGraphy>
              </Ranking3>
              <hr />
              <Ranking3>
                <TypoGraphy>하의 3위:</TypoGraphy>
                <TypoGraphy>청바지</TypoGraphy>
              </Ranking3>
              <hr />
            </RankingContainer2>
          </RankingContainer1>
        </DivBox>

        {/* 세번째 위젯_내정보 */}
        <DivBox width={450} height={260}>
          {/* 세번째 위젯의 테두리 박스 */}
          <DivBox width={410} height={220}>
            <UserName>
              <TypoGraphy
                type={'Title'}
                color={color.brandColor4}
                fontWeight={'bold'}>
                박상훈
              </TypoGraphy>
              <UserMr>
                <TypoGraphy type={'h3'}>님</TypoGraphy>
              </UserMr>
            </UserName>
            {/* 지역 설정란 */}
            <UserLocation>
              <GoLocation style={{ marginRight: '5px', marginLeft: '-10px' }} />
              <TypoGraphy type={'h1'} textAlign={'center'}>
                의정부
              </TypoGraphy>
            </UserLocation>
            {/* </TypoGraphy> */}
            {/* 지역 지정 안내말 */}
            <TypoGraphy type={'body1'} color={color.gray} textAlign={'center'}>
              <LocationComment>사는 지역을 입력해주세요</LocationComment>
            </TypoGraphy>
            {/* 로그아웃&회원탈퇴 라인 */}
            <LeaveBtn>
              {/* 질문하기! 텍스트를 사용할 경우, TypoGrapy 컴포넌트가 가장 가까이에서 감싸고 있어야 하는지?? */}
              {/* <TypoGraphy
                color={color.brandColor4}
                type={'h3'}
                fontWeight={'bold'}
                textAlign={'center'}>
                <span style={{ padding: '10px' }}>로그아웃</span>
                <span style={{ padding: '10px' }}>회원탈퇴</span>
              </TypoGraphy> */}
              <LeaveBtnPadding>
                <TypoGraphy
                  color={color.brandColor4}
                  type={'h3'}
                  fontWeight={'bold'}>
                  로그아웃
                </TypoGraphy>
              </LeaveBtnPadding>
              <LeaveBtnPadding>
                <TypoGraphy
                  color={color.brandColor4}
                  type={'h3'}
                  fontWeight={'bold'}>
                  회원탈퇴
                </TypoGraphy>
              </LeaveBtnPadding>
            </LeaveBtn>
          </DivBox>
        </DivBox>
      </WidgetContainer>
    </LayoutContainer>
  );
};

export default Home;

const WidgetContainer = styled.div`
  position: relative;
  padding: 30px;
  display: flex;
`;

const WeatherInfoTemp = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const LocationInfo = styled.div`
  position: relative;
  display: flex;
  top: -20px;
`;

const LocationInfo2 = styled.div`
  position: relative;
  padding: 4px;
`;

const WeatherInfoTempDetail = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

const TodayBest = styled.div`
  position: relative;
  bottom: 20px;
`;

const RankingContainer1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
`;

const RankingContainer2 = styled.div`
  padding: 10px;
`;

const Ranking3 = styled.div`
  position: relative;
  display: flex;
`;

const BoldHr = styled.hr`
  border: 1px solid;
`;
const VerticalHr = styled.hr`
  border: 1px solid #808080;
  width: 1;
  height: 80%;
  border-style: dotted;
`;

const UserName = styled.div`
  position: relative;
  bottom: 36px;
  display: flex;
`;

const LocationComment = styled.div`
  position: relative;
  bottom: 10px;
`;

const UserMr = styled.div`
  position: relative;
  bottom: -10px;
  margin-left: 1px;
`;

const UserLocation = styled.div`
  position: relative;
  display: flex;
  bottom: 20px;
`;

const WeatherInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const LeaveBtn = styled.div`
  position: relative;
  bottom: -36px;
  display: flex;
`;

const LeaveBtnPadding = styled.span`
  padding: 10px;
`;
