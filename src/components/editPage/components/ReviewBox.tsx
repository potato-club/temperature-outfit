import React from 'react';
import styled from '@emotion/styled';
import { CustomButton } from 'components/common';
import { customColor } from 'constants/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from 'recoil/atom';
import { todayCodyApi, weatherApi } from 'api';
import { IoMdImage } from 'react-icons/io';
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
interface ReviewBoxProps {
  day: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
}

export function ReviewBox({
  day,
  register,
  errors,
  setValue,
  control,
}: ReviewBoxProps) {
  const setCodyThumbnail = useSetRecoilState(codyThumbnail);
  const { resetRecoilState } = useEditResetRecoil();
  // const router = useRouter();

  const handleCancel = () => {
    setCodyThumbnail('');
    setValue('rating', 10);
    setValue('image', null);
    resetRecoilState();
    // router.back(); // Todo : 취소버튼 눌렀을때 값을 다시 입력하게 할건지, 이전페이지로 보낼건지 회의해봐야할듯
  };

  return (
    <Container>
      <ImageInput register={register} setValue={setValue} />
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
  @media (max-width: 525px) {
    flex-direction: column;
    gap: 12px 0;
  }
`;

const InitialImage = styled(IoMdImage)`
  width: 360px;
  height: 240px;
  background-color: ${customColor.gray};
`;
