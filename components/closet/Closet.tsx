import styled from '@emotion/styled';
import { productApi } from 'api';
import { frontApi } from 'api/productApi';
import { CustomButton, TypoGraphy, SelectBox } from 'components/common';
import { AddModal, ChooseModal } from 'components/modal';
import {
  clothesMainCategory,
  clothesSubCategory,
  customColor,
} from 'constants/index';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { addModal, chooseModal } from 'recoil/atom';
import { productType } from 'types/editPage/product.type';
import { ClothesContainer, ColorRadio, SearchBox } from './components';

export const Closet: React.FC = () => {
  const setAddModalState = useSetRecoilState(addModal);
  const setChooseModalState = useSetRecoilState(chooseModal);

  const [mainCategory, setMainCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');
  const [color, setColor] = useState<string>('');

  const [clothesData, setClothesData] = useState<Array<productType>>();

  // 옷 전체 조회
  // const getAllProduct = async () => {
  //   await productApi
  //     .getAllProduct()
  //     .then((res) => {
  //       console.log(res.data);
  //       setClothesData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const getColorFilter = async (filter : any) => {
  //       await productApi
  //         .getFilter({
  //           params: {
  //             categoryId: mainCategory,
  //             color : filter,
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res.data);
  //           setClothesData(res.data);
  //         })
  //         .catch((err) => console.log(err));
  // }

  useEffect(() => {
    mainCategory === ''
      ? frontApi.getAllProduct(setClothesData)
      : frontApi.getFilter('categoryId', mainCategory, setClothesData);
  }, [mainCategory]);

  useEffect(() => {
    setColor('');
  }, [mainCategory, subCategory]);

  useEffect(() => {
    const filter = {};
    frontApi.getFilter('categoryId', subCategory, setClothesData);
  }, [subCategory]);

  // useEffect(() => {
  //   getColorFilter(color);
  // }, [color]);

  return (
    <Container>
      <TypoGraphy type="Title" fontWeight="bold">
        옷장
      </TypoGraphy>
      <FilterWrapper>
        <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <CategoryWrapper>
            <SelectBox
              label="메인"
              dataArray={clothesMainCategory}
              categoryChange={setMainCategory}
              changeSubByMain={setSubCategory}
              value={mainCategory}
            />
            <SelectBox
              label="서브"
              dataArray={clothesSubCategory[mainCategory]}
              categoryChange={setSubCategory}
              value={subCategory}
            />
          </CategoryWrapper>

          <ColorRadio setColor={setColor} color={color} filter />
        </section>

        <SearchBox />
      </FilterWrapper>

      <Horizon />

      <ClothesContainer clothesData={clothesData} />

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
        {/* <ChooseModal categoryLabel={'bottom'} /> */}
        {/* 여기까지 */}
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
  padding: 60px 64px 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 4px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  gap: 20px;
`;

const CategoryWrapper = styled.section`
  display: flex;
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
