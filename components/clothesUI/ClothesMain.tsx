import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer, DivBox, TypoGraphy } from 'components/common';
import { color } from 'constants/color';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/Ai';
import { AiFillStar } from 'react-icons/Ai';
import { ClothesItem } from 'components/ClothesItem';
import { EnrollButton } from 'components/EnrollButton';

export const ClothesMain: React.FC = () => {
  return (
    <LayoutContainer>
      <DivBox width={1348} height={480}>
        <TypoGraphy
          type={'Title'}
          color={color.brandColor5}
          fontWeight={'bold'}>
          Today My Outfit
        </TypoGraphy>
        <StarContainer>
          <AiFillStar color="yellow" size={36} />
          <AiFillStar color="yellow" size={36} />
          <AiFillStar color="yellow" size={36} />
          <AiFillStar color="yellow" size={36} />
          <AiFillStar color="yellow" size={36} />
        </StarContainer>
        <ClothesContainer>
          <AiOutlineLeft size={44} />
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
          <AiOutlineRight size={44} />
        </ClothesContainer>
        {/* CSS설정 의문, 컨테이너 이름설정 질문 */}
        <CommentEnroll>
          <CommentContainer>
            <TypoGraphy type="h1" fontWeight="bold" color={color.brandColor3}>
              Comment
            </TypoGraphy>
            <TypoGraphy type="h4">조금 쌀쌀했다.</TypoGraphy>
          </CommentContainer>
          <EnrollButton />
        </CommentEnroll>
      </DivBox>
    </LayoutContainer>
  );
};

export default ClothesMain;

const StarContainer = styled.div`
  display: flex;
  width: 240px;
  height: 40px;
  background-color: ${color.brandColor5};
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin: 12px;
`;

const ClothesContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentEnroll = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentContainer = styled.div`
  padding: 10px;
`;
