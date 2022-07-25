import React, { useState, ChangeEvent, useRef, RefObject } from 'react';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import { useResetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import {
  bottomState,
  reviewImageState,
  etcState,
  outerState,
  reviewTextState,
  shoesState,
  topState,
  ratingState,
} from 'state/editState';
import { todayCodyApi } from 'api';

export function ReviewBox() {
  const onSubmit = async() => {
    const frm:any = new FormData();
    frm.append('image', reviewImage)
    console.log(topImage)

    const top = topImage.map(data => data);
    const outer = outerImage.map(data => data.id);
    const bottom = bottomImage.map(data => data.id);
    const shoes = shoesImage.map(data => data.id);
    const mainETC = etcImage.map((data) => data.id);
    frm.append('productsId[]', top);
    // frm.append('productsId' , outer);
    // frm.append('productsId' , bottom);
    // frm.append('productsId' , shoes);
    // frm.append('productsId', mainETC);

    // frm.append('image', reviewImage!);
    // const top = topImage.map((data) => data.id);
    // frm.append('productsId',top);
    // console.log(top)


    // for (const a of topImage) {
    //   console.log(a.id);
    //   frm.append('productsId[]', a.id);
    // }
    // for (const a of outerImage) {
    //   frm.append('productsId[]', a.id);
    // }
    // for (const a of bottomImage) {
    //   frm.append('productsId[]', a.id);
    // }
    // for (const a of shoesImage) {
    //   frm.append('productsId[]', a.id);
    // }
    // for (const a of etcImage) {
    //   frm.append('productsId[]', a.id);
    // }
    // frm.append('comment', reviewText);
    // frm.append('rating', (rating/10));


    // frm.append('image', reviewImage!);
    // frm.append('productsId[0]',topImage.map((data) => data.id))
     const data = await todayCodyApi.addProduct(frm);
     console.log(data);
    //  // 성공시 등록이 되었습니다! => 모달
     alert('서버에 코디 등록!');

    // todayCodyApi.addProduct({
    //   image: '',
    //   productsId: '',
    //   comment: '',
    //   rating: '',
    // })
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
  const [reviewThumbnail, setReviewThumbnail] =
    useRecoilState(reviewImageState);

  const [reviewImage, setReviewImage] = useState<File>();
  const [reviewText, setReviewText] = useRecoilState(reviewTextState);
  const [rating, setRating] = useRecoilState(ratingState);
  const topImage = useRecoilValue(topState);
  const outerImage = useRecoilValue(outerState);
  const bottomImage = useRecoilValue(bottomState);
  const shoesImage = useRecoilValue(shoesState);
  const etcImage = useRecoilValue(etcState);

  const ResetAll = () => {
    resetTop();
    resetOuter();
    resetBottom();
    resetShoes();
    resetEtc();
    resetReviewImage();
    resetReviewText();
    resetRating();
  };

  const handleRating = (rate: number) => {
    setRating(rate);
    // Todo : 보낼때 rate / 10 으로 보내야함
    // Todo : 받고나서는 rate * 10 해서 출력해줘야함
    // Todo : 아니면 백엔드한테 1~10점 말고, 1~100점으로 (10단위) 로 저장해달라고 얘기해보기.
  };

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      // Todo : 필요하다면 나중에 replaceAll에 확장자명을 추가해야함.
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setReviewThumbnail(String(fileReader.result!));
      };
      setReviewImage(e.target.files![0]);
      alert('코디 변경!');
      e.target.value = '';
    }
  };

  return (
    <Container>
      <BoxWrapper>
        <ImageWrapper>
          <AddButton
            id="codyImage"
            ref={codyRef}
            type="file"
            accept="image/*"
            onChange={addImage}
          />
          <Image
            src={reviewThumbnail}
            alt="review"
            width={360}
            height={240}
            onClick={() => codyRef.current && codyRef.current.click()}
          />
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
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
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
          onClick={() => ResetAll()}
        />
        <CustomButton
          customType="colorful"
          text="등록"
          sidePadding="40"
          onClick={onSubmit}
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
