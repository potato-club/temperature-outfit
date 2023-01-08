import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ClothesBox } from 'components/common';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {
  products: any;
};

export function DressRoom({ products }: Props) {
  return (
    <Container>
      {products &&
        products.map((product: any) => (
          <ClothesBox
            key={product.id}
            url={product.imageUrl!}
            id={product.id}
            name={product.name}
          />
        ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  background-color: ${customColor.white};
  padding: 12px;
  width: calc(100% - 9px);
  border-radius: 16px;
  overflow-x: auto;
  gap: 0 12px;
  /* // TODO : 이거 일단 일부러 0px 줬음 */
  min-height: 0px;
  box-sizing: content-box;
  margin-bottom: 12px;
  box-shadow: 1px 1px 5px -1px #aaa;
  ::-webkit-scrollbar {
    opacity: 0;
    height: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 226, 255, 0.8);
    border-radius: 24px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
