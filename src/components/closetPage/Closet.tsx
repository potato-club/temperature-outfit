import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { AddModal } from 'components/modal';
import { customColor } from 'constants/index';
import { useSetRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { ClothesContainer, ColorRadio, SearchBox } from './components';
import { CustomPagination } from './components/CustomPagination';
import { MainSubSelectBox } from './components/MainSubSelectBox';

export const Closet: React.FC = () => {
  const setAddModalState = useSetRecoilState(addModal);

  return (
    <Container>
      <div>
        <TypoGraphy type="Title" fontWeight="bold">
          옷장
        </TypoGraphy>
        <FilterWrapper>
          <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <MainSubSelectBox />
            <ColorRadio />
          </section>
          <SearchBox />
        </FilterWrapper>

        <Line />

        <ClothesContainer />
      </div>
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
    </Container>
  );
};

const Container = styled.section`
  width: 70%;
  max-width: 1178px;
  height: 90%;
  max-height: 956px;
  margin-top: 20px;
  padding: 60px 64px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 4px gray;
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

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  gap: 20px;
`;

const Line = styled.hr`
  border: 1px solid ${customColor.gray};
  border-bottom: 0px;
  margin: 24px 0 24px 0;
`;

const Footer = styled.section`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.section`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;
