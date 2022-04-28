import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer, DivBox, TypoGraphy } from 'components/common';
import {
  EnrollButton,
  StarPrefer,
  Comment,
} from 'components/mainPage/clothesUI';
import { color } from 'constants/color';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/Ai';
import { ClothesItem } from 'components/mainPage';

export const ClothesMain: React.FC = () => {
  return (
    <DivBox width={1400} height={488}>
      <TypoGraphy type={'Title'} color={color.brandColor5} fontWeight={'bold'}>
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

      <Footer>
        <Comment />
        <EnrollButton />
      </Footer>
    </DivBox>
  );
};

const ClothesContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.div`
  width: 1320px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
