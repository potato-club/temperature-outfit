import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { AiOutlinePlus } from 'react-icons/ai';
import { ClothesBox } from './../../common/ClothesBox';
import { ClothesDummy } from 'components/common/ClothesDummy';
type Props = {
  category: string;
};
type imageStateType = {
  id: number;
  name: string;
  image_file: File;
  preview_URL: string;
};
export function DressRoom({ category }: Props) {
  const [images, setImages] = useState<Array<imageStateType>>([]);
  const imageId = useRef(0);
  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      // Todo : 필요하다면 나중에 replaceAll에 확장자명을 추가해야함.
      const name = e.target.files![0].name.replaceAll(/.png|.jpg|.jpeg/gi,'');
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setImages([
          ...images,
          {
            id: imageId.current++,
            name: name,
            image_file: e.target.files![0],
            preview_URL: String(fileReader.result!),
          },
        ]);
      };
      alert('사진 등록!');
      e.target.value = '';
    }
  };

  const deleteImage = (id: number) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <Container>
      {images &&
        images.map((data) => (
          <ClothesWrapper key={data.id}>
            <ClothesBox
              data={data.preview_URL}
              id={data.id}
              name={data.name}
              deleteImage={deleteImage}
            />
          </ClothesWrapper>
        ))}
      <ButtonWrapper>
        <AddButton
          id={`imgUpload${category}`}
          type="file"
          accept="image/*"
          onChange={addImage}
        />
        <Label htmlFor={`imgUpload${category}`}>
          <AiOutlinePlus size={40} />
        </Label>
      </ButtonWrapper>
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
const ButtonWrapper = styled.section``;
const AddButton = styled.input`
  display: none;
`;
const Label = styled.label`
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
