import styled from '@emotion/styled';
import { CustomButton, TypoGraphy, SelectBox } from 'components/common';
import { ClothesContainer, RadioButtons, SearchBox } from './components';

import { clothesCategory, city } from 'constants/index';

export const Closet: React.FC = () => {
  return (
    <Wrapper>
      <TypoGraphy type="Title" fontWeight="bold">
        옷장
      </TypoGraphy>

      <CategoryWrapper>
        <SelectBox width={80} label="전체" propsArray={clothesCategory} />

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

const Wrapper = styled.section`
  width: 70%;
  max-width: 1178px;
  height: 90%;
  max-height: 956px;
  margin-top: 20px;
  padding: 60px 64px 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 4px gray;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CategoryWrapper = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Horizen = styled.hr`
  border: 1px solid;
  border-bottom: 0px;
  margin: 24px 0 24px 0;
  width: 100%;
`;

const Footer = styled.section`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;
