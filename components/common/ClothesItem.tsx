import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';

export const ClothesItem: React.FC = () => {
  return (
    <Container>
      <TypoGraphy type={'h4'} textAlign={'left'}>
        상의
      </TypoGraphy>
      <ImgClothes src={'/청자켓.png'} />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 200px;
  height: 200px;
  padding: 8px;
  margin: 12px;
`;

const ImgClothes = styled.img`
  width: 152px;
  display: block;
  margin: 0px auto;
`;

export default ClothesItem;
