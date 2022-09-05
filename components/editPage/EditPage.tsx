import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox, Title } from './components';
import { categories } from 'types/editPage/categories';
import { editDummy } from 'dummy/newEditDummy';
import { ChooseModal } from 'components/modal';
import { useRouter } from 'next/router';

export default function EditPage() {
  const [modalCategory, setModalCategory] = useState('');
  const router = useRouter();

  const dayQuery = router.query.day as string;
  const temp = '2022-08-22';

  const day = new Date(dayQuery ?? temp).toISOString().replace(/T.*$/, '');

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
        <ReviewBox day={day}/>
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
