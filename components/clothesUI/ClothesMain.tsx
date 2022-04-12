import React from 'react';
import styled from '@emotion/styled';
import {
  LayoutContainer,
  DivBox,
  TypoGraphy,
  ClothesItem,
} from 'components/common';
import { EnrollButton, StarPrefer, Comment } from 'components/clothesUI';
import { color } from 'constants/color';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/Ai';

export const ClothesMain: React.FC = () => {
  return (
    <LayoutContainer>
      <DivBox width={1400} height={488}>
        <TypoGraphy
          type={'Title'}
          color={color.brandColor5}
          fontWeight={'bold'}>
          Today My Outfit
        </TypoGraphy>
        <StarPrefer />
        <ClothesContainer>
          <AiOutlineLeft size={44} />
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
          <ClothesItem />
          <AiOutlineRight size={44} />
        </ClothesContainer>
        {/* CSS설정 의문, 컨테이너 이름설정 질문 */}

        <Comment />

        <EnrollButton />
      </DivBox>
    </LayoutContainer>
  );
};

export default ClothesMain;

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
