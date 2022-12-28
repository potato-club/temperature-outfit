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

      <TempBtn
        onClick={() => {
          setReviewToggle((cur) => !cur);
        }}>
        Click Me!
      </TempBtn>
      {/* 여기부터 */}
      {reviewToggle && (
        <InputWrapper>
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
        </InputWrapper>
      )}
      {/* 여기까지 */}
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

const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 0 12px;
  @media (max-width: 525px) {
    flex-direction: column;
    gap: 12px 0;
  }
`;

const TempBtn = styled.div`
  cursor: pointer;
  width: 160px;
  padding: 10px 20px;
  word-wrap: wrap;
  background-color: #de8383;
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

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  top: -362px;
  background-color: #fffa;
  padding: 20px 10px;
  border-radius: 12px 12px 0px 0px;
  animation: ${wrapperOpacityAni} 2.5s ease;
  user-select: none;
`;
