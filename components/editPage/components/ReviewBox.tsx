import React, { useState, ChangeEvent, useRef, RefObject } from 'react';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import { useResetRecoilState, useRecoilState } from "recoil";
import { bottomState, reviewImageState, etcState, outerState, reviewTextState, shoesState, topState, ratingState } from 'state/editState';

export function ReviewBox() {
  const onClick = () => {
    alert('버튼 클릭!');
  };
  
  const codyRef = useRef<HTMLInputElement>(null);

  const resetTop = useResetRecoilState(topState);
  const resetOuter = useResetRecoilState(outerState);
  const resetBottom = useResetRecoilState(bottomState);
  const resetShoes = useResetRecoilState(shoesState);
  const resetEtc = useResetRecoilState(etcState);
  const resetReviewImage = useResetRecoilState(reviewImageState);
  const resetReviewText = useResetRecoilState(reviewTextState);
  const resetRating = useResetRecoilState(ratingState);



  const [reviewImage, setReviewImage] = useRecoilState(reviewImageState);
  const [reviewText, setReviewText] = useRecoilState(reviewTextState);
  const [rating, setRating] = useRecoilState(ratingState);


  const ResetImages = () => {
    resetTop();
    resetOuter();
    resetBottom();
    resetShoes();
    resetEtc();
    resetReviewImage();
    resetReviewText();
    resetRating();
  }

  const handleRating = (rate: number) => {
    setRating(rate);
  };

    const addImage = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (e.target.value[0]) {
        const fileReader = new FileReader();
        // Todo : 필요하다면 나중에 replaceAll에 확장자명을 추가해야함.
        fileReader.readAsDataURL(e.target.files![0]);
        fileReader.onload = () => {
          setReviewImage(String(fileReader.result!));
        };
        alert('코디 변경!');
        e.target.value = '';
      }
    };

  return (
    <Container>
      <BoxWrapper>
        <ImageWrapper>
          <AddButton id='codyImage' ref={codyRef} type="file" accept="image/*" onChange={addImage} />
          <Image src={reviewImage} alt="review" width={360} height={240} onClick={() => codyRef.current && codyRef.current.click()}/>
        </ImageWrapper>
        <ButtonWrapper>
          <CustomButton
            customType="colorful"
            text="기본 이미지로 설정"
            sidePadding="20"
            onClick={() => resetReviewImage()}
          />
        </ButtonWrapper>
      </BoxWrapper>
      <BoxWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          후기
        </TypoGraphy>
        <TextArea 
        value={reviewText}
        onChange={(e) => {setReviewText(e.target.value)}}
        />
      </BoxWrapper>
      <BoxWrapper>
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
      </BoxWrapper>
      <ButtonContainer>
        <CustomButton
          customType="white"
          text="취소"
          sidePadding="40"
          onClick={() => ResetImages()}
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

const Container = styled.section`
  width: 40%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.section`
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
  outline : none;
  ::-webkit-scrollbar {
    opacity: 0;
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 226, 255, 0.8);
    border-radius: 24px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
const ButtonWrapper = styled.section`
  align-self: flex-end;
`;

const StarWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${customColor.brandColor5};
  margin-bottom: 40px;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 0 12px;
`;

const BoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const AddButton = styled.input`
  display: none;
`;