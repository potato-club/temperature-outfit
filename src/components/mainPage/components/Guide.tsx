import styled from '@emotion/styled';
import { VscCircleFilled } from 'react-icons/vsc';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoFileTrayStackedSharp } from 'react-icons/io5';
import { TypoGraphy } from 'components/common';
import Image from 'next/image';
import codyBtn from 'assets/img/decoration/codyBtn.png';
import { customColor } from 'constants/index';

export const Guide = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <Container>
          <TypoGraphy type="h3" fontWeight="bold">
            [옷 등록]
          </TypoGraphy>
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
          <TypoGraphy type="h3" fontWeight="bold">
            [코디 등록]
          </TypoGraphy>
          <Content>
            <How>
              <BulletBtn fontSize={16} />
              &nbsp;
              <Cody>
                <Image
                  src={codyBtn}
                  alt={'codyBtn'}
                  width="70px"
                  height="40px"
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
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  padding: 15% 12px;
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px 0;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 24px;
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
