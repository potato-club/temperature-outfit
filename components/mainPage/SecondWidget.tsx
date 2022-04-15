import { DivBox, TypoGraphy } from 'components/common';
import { color } from 'constants/index';
import styled from '@emotion/styled';

export const SecondWidget = () => {
  return (
    <WidgetContainer>
      <DivBox width={448} height={240}>
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
            <Hr />
            <Ranking3>
              <TypoGraphy>상의 3위:</TypoGraphy>
              <TypoGraphy>스웨터</TypoGraphy>
            </Ranking3>
            <Hr />
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
            <Hr />
            <Ranking3>
              <TypoGraphy>하의 3위:</TypoGraphy>
              <TypoGraphy>청바지</TypoGraphy>
            </Ranking3>
            <Hr />
          </RankingContainer2>
        </RankingContainer1>
      </DivBox>
    </WidgetContainer>
  );
};

const Hr = styled.hr`
  background-color: white;
`;

const WidgetContainer = styled.div`
  position: relative;
  padding: 32px;
  display: flex;
`;

const TodayBest = styled.div`
  position: relative;
  bottom: 16px;
`;

const RankingContainer1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
`;

const RankingContainer2 = styled.div`
  padding: 8px;
`;

const Ranking3 = styled.div`
  position: relative;
  display: flex;
`;

const BoldHr = styled.hr`
  border: 1px solid;
  background-color: black;
`;

const VerticalHr = styled.hr`
  border: 1px solid #808080;
  width: 1px;
  height: 80%;
  border-style: dotted;
`;
