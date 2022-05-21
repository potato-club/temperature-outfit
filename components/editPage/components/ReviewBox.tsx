import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';

export function ReviewBox() {
  const [rating, setRating] = useState(0);
  const onClick = () => {
    alert('버튼 클릭!');
  };
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/reviewDummy/review1.jpg"
          alt="review"
          width={360}
          height={240}
        />
      </ImageWrapper>
      <ButtonWrapper>
        <CustomButton
          customType="colorful"
          text="기본 이미지로 설정"
          sidePadding="20"
          onClick={onClick}
        />
      </ButtonWrapper>
      <TypoGraphy type="Title" fontWeight="bold">
        한줄평
      </TypoGraphy>
      <TextArea />
      <TypoGraphy type="Title" fontWeight="bold">
        만족도
      </TypoGraphy>
      <StarWrapper>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={40}
          allowHalfIcon
          transition
          fillColor="orange"
          emptyColor="gray"
        />
      </StarWrapper>
      <ButtonContainer>
        <CustomButton
          customType="white"
          text="취소"
          sidePadding="40"
          onClick={onClick}
        />
        <CustomButton
          customType="colorful"
          text="등록"
          sidePadding="40"
          onClick={onClick}
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  max-width: 350px;
  height: 100%;
  gap: 8px 0;
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

const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${customColor.brandColor5};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 12px;
`;