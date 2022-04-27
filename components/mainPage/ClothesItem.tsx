import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import Image from 'next/image';
import bluejacket from 'assets/img/bluejacket.png';

export const ClothesItem: React.FC = () => {
  return (
    <Container>
      <TypoGraphy type={'h4'} textAlign={'left'}>
        상의
      </TypoGraphy>
      <Image src={bluejacket} alt="옷" />
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

export default ClothesItem;
