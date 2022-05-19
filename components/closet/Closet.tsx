import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { Category, ClotheCategory, RadioButton, SearchBox } from './components';

export const Closet: React.FC = () => {
  return (
    <Wrapper>
      <TypoGraphy>옷장</TypoGraphy>
      <CategoryWrapper>
        <ClotheCategory />
        <Category />
        <RadioButton />
        <SearchBox />
      </CategoryWrapper>
      <Horizen />
      <ItemContainer></ItemContainer>
      <CustomButton customType="colorful" text="ss" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  width: 1178px;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const Horizen = styled.hr`
  border: thin solid;
  border-bottom: 0px;
  width: 1000px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
  width: 1000px;
  height: 600px;
  border: 3px solid;
`;
