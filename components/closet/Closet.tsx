import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import {
  SubCategory,
  MainCategory,
  ClothesContainer,
  RadioButtons,
  SearchBox,
} from './components';

export const Closet: React.FC = () => {
  return (
    <Wrapper>
      <TypoGraphy type="Title" fontWeight="bold">
        옷장
      </TypoGraphy>

      <CategoryWrapper>
        <MainCategory />
        <SubCategory />
        <RadioButtons />
        <SearchBox />
      </CategoryWrapper>

      <Horizen />

      <ClothesContainer />

      <Footer>
        <CustomButton
          customType="colorful"
          text="추가"
          sidePadding="20"
          height={40}
        />
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  justify-content: space-around;
`;

const CategoryWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Horizen = styled.hr`
  border: thin solid;
  border-bottom: 0px;
  width: 100%;
`;

const Footer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;
