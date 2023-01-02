import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CustomButton } from 'components/common';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ImageInput, RatingInput, CommentInput } from './index';
import { codyThumbnail } from 'recoil/atom/editState';
import useEditResetRecoil from 'hooks/useEditResetRecoil';
import { keyframes } from '@emotion/react';
import { customColor } from 'constants/index';
interface ReviewBoxProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
}
export function ReviewBox({
  register,
  errors,
  setValue,
  control,
}: ReviewBoxProps) {
  const setCodyThumbnail = useSetRecoilState(codyThumbnail);
  const { resetRecoilState } = useEditResetRecoil();
  const router = useRouter();

  const handleCancel = () => {
    setCodyThumbnail('');
    setValue('rating', 10);
    setValue('image', null);
    resetRecoilState();
    router.back();
  };

  const [reviewToggle, setReviewToggle] = useState(false);

  return (
    <Container>
      <ImageInput register={register} setValue={setValue} />
      <ToggleWrapper>
        {reviewToggle && (
          <ToggleInputWrapper>
            <CommentInput register={register} errors={errors} />
            <RatingInput control={control} errors={errors} />
            <ButtonContainer>
              <CustomButton
                customType="white"
                text="취소"
                sidePadding="40"
                type="reset"
                onClick={handleCancel}
              />
              <CustomButton
                customType="colorful"
                text="등록"
                sidePadding="40"
                type="submit"
              />
            </ButtonContainer>
          </ToggleInputWrapper>
        )}
        <ToggleBtn
          onClick={() => {
            setReviewToggle((cur) => !cur);
          }}>
          <Span>후기 / 만족도</Span>
        </ToggleBtn>
      </ToggleWrapper>
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

const ToggleWrapper = styled.div`
  position: relative;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 0 12px;
`;

const ToggleBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  border-radius: 10px;
  background-color: ${customColor.white};
  background-color: ${customColor.darkSky};
  box-shadow: 2px 3px 1px 0px #aaa;
  animation: changeBtnR 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #4978b6;
    animation: changeBtn 0.3s ease;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 3px);
  }
`;
const Span = styled.span`
  user-select: none;

  transition: all 0.3s ease-in-out;
  &:hover {
  }
`;
const wrapperOpacityAni = keyframes`
  0% {
    opacity : 0;
  }
  50%{
    opacity : 1;
  }
  75% {
    opacity : 1;
  }
`;

const ToggleInputWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  background-color: #fffa;
  padding: 20px 10px;
  border-radius: 12px 12px 0px 0px;
  animation: ${wrapperOpacityAni} 2.5s ease;
  user-select: none;
  bottom: 5vh;
`;
