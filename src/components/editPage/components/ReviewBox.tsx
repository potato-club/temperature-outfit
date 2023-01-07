import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
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
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { CgChevronDoubleDown } from 'react-icons/cg';
import { ImageInput, RatingInput, CommentInput } from './index';
import { codyThumbnail } from 'recoil/atom/editState';
import useEditResetRecoil from 'hooks/useEditResetRecoil';
import { customColor } from 'constants/index';
import { PushButton } from './PushButton';

interface ReviewBoxProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
}
interface ToggleProps {
  isToggle?: boolean;
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

  const [isToggle, setIsToggle] = useState(false);

  return (
    <Container>
      <MoveDiv>
        <ContainerInner isToggle={isToggle}>
          <ImageDiv>
            <ImageInput register={register} setValue={setValue} />
            <ArrowIcon
              onClick={() => {
                setIsToggle((prev) => !prev);
              }}
              isToggle={isToggle}>
              <CgChevronDoubleDown />
            </ArrowIcon>
          </ImageDiv>
          <ReviewDiv isToggle={isToggle}>
            <ReviewInner>
              <CommentInput register={register} errors={errors} />
              <RatingInput control={control} errors={errors} />
            </ReviewInner>
          </ReviewDiv>
        </ContainerInner>
      </MoveDiv>
      <SubmitDiv>
        <ButtonContainer>
          <PushButton
            name="취소"
            buttonType="cancel"
            type="button"
            onClick={handleCancel}
          />
          <PushButton name="등록" buttonType="submit" type="submit" />
        </ButtonContainer>
      </SubmitDiv>
    </Container>
  );
}
const movingArrow = keyframes`
  0%{
    bottom: -48px;
  }
  50%{
    bottom: -56px;
  }
`;
const Container = styled.section`
  width: 40%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: space-between;
  height: 100%;
`;
const MoveDiv = styled.section`
  display: flex;
  height: calc(100% - 52px);
  width: 100%;
  overflow-y: hidden;
`;
const ContainerInner = styled.section<ToggleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160%;
  transform: ${(props) =>
    props.isToggle ? 'translate(0, -50%)' : 'translate(0, 0%)'};
  transition: all 0.8s ease;
`;
const ButtonContainer = styled.section`
  display: flex;
  width: 100%;
  height: 72px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0 12px;
  padding: 0px 10%;
`;
const ReviewDiv = styled.section<ToggleProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: 50%;
  flex-direction: column;
  padding: 20px 4px 4px;
  opacity: ${(props) => (props.isToggle ? '1' : '0.5')};
  cursor: ${(props) => !props.isToggle && 'pointer'};
  transition: opacity 0.4s ease;
`;
const SubmitDiv = styled.section`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: -20px;
  right: 0;
  padding-top: 4px;
`;
const ImageDiv = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 50%;
  flex-direction: column;
  padding-right: 4px;
  padding-bottom: 4px;
`;
const ReviewInner = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 36px;
  background-color: #fff6;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 1px 1px 5px -1px #aaa;
`;
const ArrowIcon = styled.div<ToggleProps>`
  position: absolute;
  bottom: -48px;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, 0) rotateX(50deg)
    ${(props) => (props.isToggle ? 'rotate(-180deg)' : '')};
  font-size: 60px;
  color: #222;
  animation: ${movingArrow} 1s ease infinite;
  cursor: pointer;
  transition: transform 0.4s ease;
`;
