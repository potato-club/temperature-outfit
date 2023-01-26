import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { AddModal } from 'components/modal';
import { customColor } from 'constants/index';
import { useSetRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { ClothesContainer, ColorRadio, SearchBox } from './components';
import { CustomPagination } from './components/CustomPagination';
import { MainSubSelectBox } from './components/MainSubSelectBox';
import { BiCloset } from 'react-icons/bi';

export const Closet: React.FC = () => {
  const setAddModalState = useSetRecoilState(addModal);

  return (
    <Container>
      <Wrapper>
        <WrapperInner>
          <Head>
            <ClosetTitle>
              <Icon>
                <BiCloset fontSize="24px" />
              </Icon>
              <TypoGraphy type="h1" fontWeight="bold">
                옷장
              </TypoGraphy>
            </ClosetTitle>
            <FilterWrapper>
              <FilterWrapSection>
                <MainSubSelectBox />
                <ColorRadio />
              </FilterWrapSection>
              <SearchBox />
            </FilterWrapper>
            <Line />
          </Head>
          <Body>
            <ClothesContainer />
          </Body>
          <Footer>
            <CustomPagination />
            <ButtonWrapper>
              <CustomButton
                type="button"
                customType="colorful"
                text="추가"
                sidePadding="20"
                height={40}
                onClick={() => setAddModalState((cur) => !cur)}
              />
              <AddModal />
            </ButtonWrapper>
          </Footer>
        </WrapperInner>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  max-width: 1400px;
  height: max-content;
  max-height: calc(100vh - 44px);
  margin-top: 44px;
  padding: 12px;
`;

const Wrapper = styled.section`
  width: 80%;
  max-width: 1178px;
  height: 100%;
  padding: 48px 62px 24px;
  background-color: ${customColor.white};
  border-radius: 10px;
  box-shadow: 2px 2px 5px -1px ${customColor.grayDark};
  display: flex;
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const FilterWrapSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Head = styled.section``;
const Body = styled.section`
  width: 100%;
  min-height: 312px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.backgroundBlue};
    border-radius: 24px;
  }
`;

const FilterWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 18px;
  gap: 12px;
`;

const Line = styled.hr`
  border: 1px solid ${customColor.grayLight};
  border-bottom: 0px;
  margin: 14px 0 18px;
`;

const Footer = styled.section`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

const ButtonWrapper = styled.article`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ClosetTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.div`
  margin-right: 6px;
`;
