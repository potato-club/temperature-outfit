import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ClothesBox } from 'components/common';

type Props = {
  products: any;
};

export function DressRoom({ products }: Props) {
  return (
    <Container>
      {products &&
        products.map((product: any) => (
          <ClothesWrapper key={product.id}>
            <ClothesBox
              url={product.imageUrl!}
              id={product.id}
              name={product.name}
            />
          </ClothesWrapper>
        ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  background-color: ${customColor.white};
  padding: 12px;
  width: 50%;
  border-radius: 24px;
  overflow-x: auto;
  gap: 0 12px;
  min-height: 80px;
  box-sizing: content-box;
  margin-bottom: 12px;
  box-shadow: 4px 4px 4px #00000025;
  ::-webkit-scrollbar {
    opacity: 0;
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 226, 255, 0.8);
    border-radius: 24px;
    background-clip: padding-box;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
const AddButton = styled.label`
  border: 1px solid ${customColor.gray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80px;
  border-radius: 24px;
`;

const ClothesWrapper = styled.section`
  position: relative;
`;
