import React from 'react'
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { Title } from './components';
import { ClothesDummy } from 'components/common/ClothesDummy';

const category = ['상의', '아우터', '하의', '신발', '기타'];
export default function EditPage() {
  return (
    <Container>
      <Title />
      <Contents>
        {/* <CodyBox>
          {category.map((data, index) => (
            <TypoGraphy type='Title' key={index} fontWeight='bold'>{data}</TypoGraphy>
          ))}
        </CodyBox> */}
        <CodyBox>
          <TypoGraphy type="Title" fontWeight="bold">
            상의
          </TypoGraphy>
          <DressRoom>
            <ClothesDummy />
            <ClothesDummy />
          </DressRoom>
        </CodyBox>
        <ReviewBox>d</ReviewBox>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1178px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 40px 0;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  gap: 0 28px;
`;

const CodyBox = styled.div`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

const DressRoom = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 24px;
  margin-left: 40px;
  gap: 0 12px;
  overflow: hidden;
`;

const ReviewBox = styled.div`
  width: 40%;
  max-width: 350px;
`;