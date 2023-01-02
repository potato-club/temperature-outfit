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
        <Body>
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
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 40px 0px;
`;

const Wrapper = styled.section`
  width: 80vw;
  max-width: 1178px;
  min-height: 720px;
  margin-top: 20px;
  padding: 48px 62px 24px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px -1px #aaa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(150, 137, 235, 0.6);
    border-radius: 24px;
  }
`;
const FilterWrapSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Body = styled.section``;

const FilterWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 18px;
  gap: 12px;
`;

const Line = styled.hr`
  border: 1px solid ${customColor.gray};
  border-bottom: 0px;
  margin: 16px 0 24px 0;
`;

const Footer = styled.section`
  margin-top: 12px;
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
