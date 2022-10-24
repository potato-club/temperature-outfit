import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { AiOutlinePlus } from 'react-icons/ai';
import { RecoilState, useRecoilState, useSetRecoilState } from 'recoil';
import { ClothesBox } from 'components/common';
import { chooseModal } from 'recoil/atom';
import { ProductDetailResponse } from 'types';
import { categoryLabel } from 'recoil/atom/chooseModal';
type Props = {
  category: string;
  recoil: RecoilState<ProductDetailResponse[]>;
};

export function DressRoom({ category, recoil }: Props) {
  const [images, setImages] = useRecoilState(recoil);
  const setChooseModalState = useSetRecoilState(chooseModal);
  const setCategoryLabel = useSetRecoilState(categoryLabel);

  const handleModal = () => {
    setChooseModalState((cur) => !cur);
    setCategoryLabel(category);
  };

  const deleteImage = (id: string) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <Container>
      {images &&
        images.map((data) => (
          <ClothesWrapper key={data.id}>
            <ClothesBox
              url={data.imageUrl!}
              id={data.id}
              type="edit"
              name={data.name}
              deleteImage={deleteImage}
            />
          </ClothesWrapper>
        ))}
      <AddButton onClick={() => handleModal()}>
        <AiOutlinePlus size={40} />
      </AddButton>
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
  min-width: 100px;
  height: 80px;
  border-radius: 24px;
`;

const ClothesWrapper = styled.section`
  position: relative;
`;
