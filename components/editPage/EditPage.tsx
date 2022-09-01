import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox, Title } from './components';
import { categories } from 'types/editPage/categories';
import { editDummy } from 'dummy/newEditDummy';
import { ChooseModal } from 'components/modal';
import { useRouter } from 'next/router';
import {
  topState,
  bottomState,
  etcState,
  outerState,
  shoesState,
} from 'recoil/atom';
import { useSetRecoilState } from 'recoil';
import { clothesSubCategory, clothesMainCategory } from 'constants/index';

export default function EditPage() {
  const [modalCategory, setModalCategory] = useState('');
  const router = useRouter();
  const dayQuery = router.query.day as string;
  const tempDay = '2222-22-22';

  const day = new Date(dayQuery ?? tempDay).toISOString().replace(/T.*$/, '');

  // 이게 있다면 useState로 관리해서 넘겨줘야할듯
  // const { imageUrl, rating, products, comment } = JSON.parse(
  //   router.query.outfitData as string,
  // );
  useEffect(() => {
    router.query.outfitData;
  }, []);
  // 분류하기
  console.log(categories);
  const setTopValue = useSetRecoilState(topState);
  const setBottomValue = useSetRecoilState(bottomState);
  const setEtcValue = useSetRecoilState(etcState);
  const setOuterValue = useSetRecoilState(outerState);
  const setShoesValue = useSetRecoilState(shoesState);

  const filterSubCategory = (category: string, categoryId: string) => {
    return clothesSubCategory[category]
      .map((item: any) => item.id)
      .includes(categoryId);
  };
  const filterProduct = (product: any) => {
    if (filterSubCategory('top', product.categoryId)) {
      setTopValue((prev) => [...prev, product]);
    }
    if (filterSubCategory('outer', product.categoryId)) {
      setOuterValue((prev) => [...prev, product]);
    }
    if (filterSubCategory('bottom', product.categoryId)) {
      setBottomValue((prev) => [...prev, product]);
    }
    if (filterSubCategory('shoes', product.categoryId)) {
      setShoesValue((prev) => [...prev, product]);
    }
    if (filterSubCategory('mainETC', product.categoryId)) {
      setEtcValue((prev) => [...prev, product]);
    }
  };

  // useEffect(() => {
  //   products.forEach((product: any) => {
  //     filterProduct(product);
  //   });
  // }, []);
  return (
    <Container>
      <Title
        average={editDummy.average}
        max={editDummy.max}
        min={editDummy.min}
        day={day}
      />
      <Contents>
        <CodyBox>
          {categories.map((data, index) => (
            <Category key={index}>
              <TypoGraphy type="Title" fontWeight="bold">
                {data.title}
              </TypoGraphy>
              <DressRoom
                category={data.title}
                recoil={data.recoil}
                setModalCategory={setModalCategory}
              />
            </Category>
          ))}
        </CodyBox>
        <ReviewBox
          day={day}
          // putImageUrl={imageUrl}
          // putRating={rating}
          // putComment={comment}
        />
      </Contents>
      <ChooseModal categoryLabel={modalCategory} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1178px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Contents = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  gap: 0 28px;
`;

const Category = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CodyBox = styled.section`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 10px;
  background-color: #c4c4c450;
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
