import styled from '@emotion/styled';
import { VscCircleFilled } from 'react-icons/vsc';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoFileTrayStackedSharp, IoPersonCircleOutline } from 'react-icons/io5';
import { TypoGraphy } from 'components/common';
import Image from 'next/image';
import { customColor } from 'constants/index';

export const Guide = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <Container>
          <Title>
            <TitleInner>
              <TitleDeco />
              <TitleText>
                <TypoGraphy
                  type="h3"
                  fontWeight="bold"
                  color={customColor.darkSky}>
                  옷 등록
                </TypoGraphy>
              </TitleText>
            </TitleInner>
          </Title>
          <Content>
            <How>
              <BulletBtn fontSize={16} />
              <TypoGraphy type="h4">&nbsp;상단메뉴의&nbsp;</TypoGraphy>
              <Closet fontSize={20} />
              <TypoGraphy type="h4">을 눌러 옷을 등록해 보세요</TypoGraphy>
            </How>
          </Content>
        </Container>
        <Container>
          <Title>
            <TitleInner>
              <TitleDeco />
              <TitleText>
                <TypoGraphy
                  type="h3"
                  fontWeight="bold"
                  color={customColor.darkSky}>
                  코디 등록
                </TypoGraphy>
              </TitleText>
            </TitleInner>
          </Title>
          <Content>
            <How>
              <BulletBtn fontSize={16} />
              &nbsp;
              <Cody>
                <Image
                  src={'/decoration/codyBtn.png'}
                  alt={'codyBtn'}
                  width="80px"
                  height="48px"
                />
              </Cody>
              <TypoGraphy type="h4">
                을 눌러서 오늘의 코디를 등록해 보세요
              </TypoGraphy>
            </How>
            <How_>
              <How>
                <BulletBtn fontSize={16} />
                <TypoGraphy type="h4">&nbsp;상단메뉴의&nbsp;</TypoGraphy>
                <Calendar fontSize={20} />
                <TypoGraphy type="h4">을 눌러 달력으로 이동 후,</TypoGraphy>
              </How>
              <TypoGraphy type="h4">
                &emsp;원하는 날짜를 눌러 그때의 코디를 등록하세요
              </TypoGraphy>
            </How_>
          </Content>
        </Container>
        <Container>
          <Title>
            <TitleInner>
              <TitleDeco />
              <TitleText>
                <TypoGraphy
                  type="h3"
                  fontWeight="bold"
                  color={customColor.darkSky}>
                  지역 설정
                </TypoGraphy>
              </TitleText>
            </TitleInner>
          </Title>
          <Content>
            <How>
              <BulletBtn fontSize={16} />
              <TypoGraphy type="h4">&nbsp;상단메뉴의&nbsp;</TypoGraphy>
              <Person fontSize={24} />
              <TypoGraphy type="h4">을 누른 후, 지역을 선택하세요</TypoGraphy>
            </How>
          </Content>
        </Container>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: max-content;
  justify-content: center;
  overflow-y: auto;
  margin-bottom: 5%;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.grayDark};
    border-radius: 24px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 52px 0;
  padding: 24px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px 60px;
`;
const Title = styled.div`
  display: flex;
  min-width: 120px;
  align-items: flex-start;
  justify-content: flex-end;
`;
const TitleInner = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  margin-top: 4px;
`;
const TitleText = styled.div`
  display: flex;
  z-index: 5;
`;
const TitleDeco = styled.div`
  display: flex;
  position: absolute;
  width: 110%;
  height: 26px;
  top: -6px;
  left: 50%;
  transform: skew(0deg) translate(-50%, 0);
  box-shadow: 1px 1px 4px -1px ${customColor.grayLight};
  border-radius: 6px;
  background: ${customColor.white + '6'};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const How = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`;
const How_ = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  gap: 10px 0;
`;
const Cody = styled.div`
  display: flex;
  margin-bottom: 2px;
`;
const Calendar = styled(FaRegCalendarAlt)`
  margin: 0px 2px 6px;
`;
const Closet = styled(IoFileTrayStackedSharp)`
  margin: 0px 2px 6px;
`;
const BulletBtn = styled(VscCircleFilled)`
  margin-bottom: 6px;
`;
const Person = styled(IoPersonCircleOutline)`
  margin-bottom: 6px;
`;
