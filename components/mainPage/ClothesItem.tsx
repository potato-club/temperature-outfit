import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import Image from 'next/image';
import bluejacket from 'assets/img/bluejacket.png';
import { color } from 'constants/color';

export const ClothesItem: React.FC = () => {
  return (
    <Container>
      <TypoGraphy type={'h4'} textAlign={'left'} color="black">
        상의
      </TypoGraphy>
      <Image src={bluejacket} alt="옷" width={140} height={140} />
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(to bottom, ${color.brandColor3}, white 40%);
  border-radius: 12px;
  width: 200px;
  height: 200px;
  padding: 8px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default ClothesItem;
