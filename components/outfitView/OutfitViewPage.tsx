import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox, Title } from './components';
import { editDummy } from 'dummy/newEditDummy';
import { useRouter } from 'next/router';
import { todayCodyApi } from 'api';

// 이거 constant로 만들기
const categories = ['상의', '아우터', '하의', '신발', '기타'];

export default function EditPage() {
  const [outfitData, setOutfitData] = useState({
    date: '2022-08-11',
    imageUrl: '/codyDummy/cody5',
    rating: 0,
    products: [],
    comment: '초기 Comment',
  });

  const router = useRouter();

  useEffect(() => {
    router.query.id &&
      (async () => {
        try {
          const {
            data: { date, imageUrl, rating, products, comment },
          } = await todayCodyApi.getOutfit(router.query.id as string);

          setOutfitData({
            date,
            imageUrl,
            rating,
            products,
            comment,
          });
        } catch (error) {
          console.log(error);
        }
      })();
  }, [router.query.id]);

  if (!router.query.id) {
    return <div>페이지가 없습니다</div>;
  }

  return (
    <Container>
      <Title
        average={editDummy.average}
        max={editDummy.max}
        min={editDummy.min}
        day={outfitData.date}
      />
      <Contents>
        <CodyBox>
          {categories.map((category, index) => (
            <Category key={index}>
              <TypoGraphy type="Title" fontWeight="bold">
                {category}
              </TypoGraphy>

              {/* 여기서 이제 구현해야하네 */}
              <DressRoom
                images={[]} // 각각의 카테고리에 맞는 이미지값들
              />
            </Category>
          ))}
        </CodyBox>
        <ReviewBox
          comment={outfitData.comment}
          rating={outfitData.rating}
          outFitImageUrl={outfitData.imageUrl}
        />
      </Contents>
    </Container>
  );
}

{
  /* <DressRoom
  images={[
    {
      id: '1',
      name: 'dd',
      imageUrl: '/reviewDummy/review1.jpg',
    },
  ]} // 각각의 카테고리에 맞는 이미지값들
/>; */
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
