import React, { useState, ChangeEvent, useRef, RefObject } from 'react';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import { useRouter } from 'next/router';
import { confirmModal } from 'utils/interactionModal';
import { todayCodyApi } from 'api';

interface ReviewBoxProps {
  comment: string;
  rating: number;
  outFitImageUrl: string;
  outfitData: any;
}
export function ReviewBox({
  comment,
  rating,
  outFitImageUrl,
  outfitData,
}: ReviewBoxProps) {
  const router = useRouter();
  const handlePut = () => {
    router.push(
      {
        pathname: '/edit',
        query: {
          day: outfitData.date,
          outfitData: JSON.stringify(outfitData),
        },
      },
      'put',
    );
  };

  const deleteModal = () => {
    confirmModal('삭제하시겠습니까?', handleDelete);
  };

  const handleDelete = async () => {
    try {
      await todayCodyApi.deleteOutfit(router.query.id as string);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <BoxWrapper>
        <ImageWrapper>
          <Image
            src={outFitImageUrl || '/cody.jpg'} // 코디 사진
            alt="review"
            width={360}
            height={240}
          />
        </ImageWrapper>
      </BoxWrapper>
      <BoxWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          후기
        </TypoGraphy>
        <TextArea readOnly value={comment} />
      </BoxWrapper>
      <BoxWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          만족도
        </TypoGraphy>
        <StarWrapper>
          <Rating
            ratingValue={rating}
            size={40}
            transition
            fillColor="orange"
            emptyColor="gray"
          />
        </StarWrapper>
      </BoxWrapper>
      <ButtonContainer>
        <CustomButton
          customType="white"
          text="삭제하기"
          sidePadding="20"
          onClick={deleteModal}
        />
        <CustomButton
          customType="colorful"
          text="수정하기"
          sidePadding="20"
          onClick={handlePut}
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
  outline: none;
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

const StarWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${customColor.brandColor5};
  margin-bottom: 40px;
  pointer-events: none;
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
