import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import { useRouter } from 'next/router';
import {
  completeCheckModal,
  confirmModal,
  errorModal,
} from 'utils/interactionModal';
import { todayCodyApi } from 'api';
import { useMutation } from 'react-query';
import { keyframes } from '@emotion/react';
import { PushButton } from 'components/editPage/components/PushButton';
import { CgChevronDoubleDown } from 'react-icons/cg';
import { FaComments } from 'react-icons/fa';
import { MdThumbUp } from 'react-icons/md';
import { customColor } from 'constants/index';

interface ReviewBoxProps {
  comment: string;
  rating: number;
  outFitImageUrl: string;
}
export function ReviewBox({ comment, rating, outFitImageUrl }: ReviewBoxProps) {
  const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);

  const handlePut = () => {
    router.push({
      pathname: '/edit',
      query: {
        outfitId: router.query.id,
      },
    });
  };
  const { mutate } = useMutation(
    () => todayCodyApi.deleteOutfit(router.query.id as string),
    {
      onSuccess: () => {
        completeCheckModal(() => router.push('/calendar'));
      },
      onError: (err: unknown) => {
        // errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  const deleteModal = () => {
    confirmModal('삭제하시겠습니까?', mutate);
  };

  return (
    <Container>
      <MoveDiv>
        <ContainerInner isToggle={isToggle}>
          <ImageDiv>
            <ImageWrapper>
              <Image
                src={outFitImageUrl || '/cody.jpg'} // 코디 사진
                alt="review"
                layout="fill"
              />
            </ImageWrapper>
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
              <CommentContainer>
                <CommentTitle>
                  <Icon>
                    <FaComments fontSize="24px" />
                  </Icon>
                  <TypoGraphy type="h1" fontWeight="bold">
                    후기
                  </TypoGraphy>
                </CommentTitle>
                <TextArea readOnly value={comment} />
              </CommentContainer>

              <RatingContainer>
                <RatingTitle>
                  <Icon>
                    <MdThumbUp fontSize="24px" />
                  </Icon>
                  <TypoGraphy type="h1" fontWeight="bold">
                    만족도
                  </TypoGraphy>
                </RatingTitle>
                <RatingWrapper>
                  <Rating
                    ratingValue={rating}
                    size={36}
                    transition
                    fillColor={customColor.yellow}
                    emptyColor={customColor.grayDark}
                  />
                </RatingWrapper>
              </RatingContainer>
            </ReviewInner>
          </ReviewDiv>
        </ContainerInner>
      </MoveDiv>
      <SubmitDiv>
        <ButtonContainer>
          <PushButton
            name="삭제"
            buttonType="cancel"
            type="button"
            onClick={deleteModal}
          />
          <PushButton
            name="수정"
            buttonType="submit"
            type="submit"
            onClick={handlePut}
          />
        </ButtonContainer>
      </SubmitDiv>
    </Container>
  );
}

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

const ImageWrapper = styled.section`
  display: flex;
  position: relative;
  height: 100%;
  border-radius: 10px;
  background-color: ${customColor.black + '50'};
  box-shadow: 1px 1px 5px -1px ${customColor.grayLight};
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  border: none;
  box-shadow: 1px 1px 5px -1px ${customColor.grayDark};

  resize: none;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 16px;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.grayDark};
    border-radius: 24px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

const RatingWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 0px 20px;
  pointer-events: none;
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

const BoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

interface ToggleProps {
  isToggle?: boolean;
}
const MoveDiv = styled.div`
  display: flex;
  height: calc(100% - 52px);
  width: 100%;
  overflow-y: hidden;
`;
const ContainerInner = styled.div<ToggleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160%;
  transform: ${(props) =>
    props.isToggle ? 'translate(0, -50%)' : 'translate(0, 0%)'};
  transition: all 0.8s ease;
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
const SubmitDiv = styled.div`
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
  background-color: ${customColor.white + '6'};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 1px 1px 5px -1px ${customColor.grayDark};
`;

const movingArrow = keyframes`
  0%{
    bottom: -48px;
  }
  50%{
    bottom: -56px;
  }
`;

const ArrowIcon = styled.div<ToggleProps>`
  position: absolute;
  bottom: -48px;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, 0) rotateX(50deg)
    ${(props) => (props.isToggle ? 'rotate(-180deg)' : '')};
  font-size: 60px;
  color: ${customColor.black};
  animation: ${movingArrow} 1s ease infinite;
  cursor: pointer;
  transition: transform 0.4s ease;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.div`
  margin-right: 6px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const RatingTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
