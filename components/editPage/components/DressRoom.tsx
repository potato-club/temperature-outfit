import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ClothesDummy } from 'components/common/ClothesDummy';
import { AiOutlinePlus } from 'react-icons/ai';

export function DressRoom() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (!e.target.files) return;

    const uploadFile = e.target.files[0];
    const formData = new FormData();

    formData.append('files', uploadFile);
    alert('사진 등록!');
  };

  // 임시코드
  const TestArray = [1, 2, 3, 4, 5];

  return (
    <Container>
      {TestArray.map((data, index) => (
        <ClothesWrapper key={index}>
          <ClothesDummy />
        </ClothesWrapper>
      ))}
      <ButtonWrapper>
        <AddButton
          id="imgUpload"
          type="file"
          accept="image/*"
          onChange={onChange}
        />
        <Label htmlFor="imgUpload">
          <AiOutlinePlus size={40} />
        </Label>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: ${customColor.white};
  padding: 12px;
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
const ButtonWrapper = styled.div``;
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

const ClothesWrapper = styled.div`
  position: relative;
`;
