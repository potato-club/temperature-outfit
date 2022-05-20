import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import {
  Category,
  ClotheCategory,
  ClothesContainer,
  RadioButtons,
  SearchBox,
} from './components';

export const Closet: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        <TypoGraphy type="Title" fontWeight="bold">
          옷장
        </TypoGraphy>
      </Title>

      <CategoryWrapper>
        <ClotheCategory />
        <Category />
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
  margin-top: 20px;
  padding: 64px;
  width: 1178px;
  height: 956px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 4px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  width: 100%;
`;

const CategoryWrapper = styled.div`
  width: 85%;
  display: flex;
  gap: 10px;
`;
const Horizen = styled.hr`
  border: thin solid;
  border-bottom: 0px;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
`;
