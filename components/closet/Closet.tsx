import styled from '@emotion/styled';
import { CustomButton, TypoGraphy, SelectBox } from 'components/common';
import { AddModal, ChooseModal } from 'components/modal';
import {
  clothesMainCategory,
  clothesSubCategory,
  customColor,
} from 'constants/index';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { addModal, chooseModal } from 'recoil/atom';
import { ClothesContainer, RadioButtons, SearchBox } from './components';

export const Closet: React.FC = () => {
  const setAddModalState = useSetRecoilState(addModal);
  const setChooseModalState = useSetRecoilState(chooseModal);

  const [selectedMainCategory, setSelectedMainCategory] = useState('top');

  return (
    <Wrapper>
      <TypoGraphy type="Title" fontWeight="bold">
        옷장
      </TypoGraphy>

      <CategoryWrapper>
        <SelectBox
          label="전체"
          dataArray={clothesMainCategory}
          subCategoryChange={setSelectedMainCategory}
        />
        <SelectBox
          label="서브"
          dataArray={clothesSubCategory[selectedMainCategory]}
        />

        <RadioButtons />
        <SearchBox />
      </CategoryWrapper>

      <Horizon />

      <ClothesContainer category={selectedMainCategory} />

      <Footer>
        <CustomButton
          customType="colorful"
          text="추가"
          sidePadding="20"
          height={40}
          onClick={() => setAddModalState((cur) => !cur)}
        />
        <AddModal />
        {/* 이건 잠시 있는 옷 선택 모달 */}
        <CustomButton
          customType="colorful"
          text="옷 선택하기 (임시)"
          sidePadding="20"
          height={40}
          onClick={() => setChooseModalState((cur) => !cur)}
        />
        <ChooseModal mainCategory={'bottom'} />
        {/* 여기까지 */}
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
const Horizon = styled.hr`
  border: 1px solid ${customColor.gray};
  border-bottom: 0px;
  margin: 24px 0 24px 0;
  width: 100%;
`;

const Footer = styled.section`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;
