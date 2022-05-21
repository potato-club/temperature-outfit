import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { DressRoom, Title } from './components';
import { ClothesDummy } from 'components/common/ClothesDummy';
import { AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';

const category = ['상의', '아우터', '하의', '신발', '기타'];
export default function EditPage() {
    const onClick = () => {
      alert('버튼 클릭!');
    };
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
              <DressRoom />
            </Category>
          ))}
        </CodyBox>
        <ReviewBox>
          <ImageWrapper>
            <Image
              src="/reviewDummy/review1.jpg"
              alt="review"
              width={360}
              height={240}
            />
          </ImageWrapper>
          <ButtonWrapper>
            <CustomButton customType="colorful" text="기본 이미지로 설정" sidePadding='20' onClick={onClick}/>
          </ButtonWrapper>
          <TypoGraphy type="Title" fontWeight="bold">
            한줄평
          </TypoGraphy>
          <TextArea />
        </ReviewBox>
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
`;

const Contents = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  gap: 0 28px;
`;

const Category = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CodyBox = styled.div`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 10px;
  background-color: #c4c4c450;
  overflow-y: auto;
`;

const ReviewBox = styled.div`
  width: 40%;
  max-width: 350px;
  height: 100%;
  gap: 12px 0;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  resize: none;
  padding: 8px;
  box-sizing: border-box;
`;
const ButtonWrapper = styled.div`
  align-self: flex-end;
`;