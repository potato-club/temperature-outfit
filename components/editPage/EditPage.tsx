import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox, Title } from './components';

const category = ['상의', '아우터', '하의', '신발', '기타'];
export default function EditPage() {
  return (
    <Container>
      <Title />
      <Contents>
        <CodyBox>
          {category.map((data, index) => (
            <Category key={index}>
              <TypoGraphy type="Title" fontWeight="bold">
                {data}
              </TypoGraphy>
              <DressRoom category={data} />
            </Category>
          ))}
        </CodyBox>
        <ReviewBox />
      </Contents>
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
