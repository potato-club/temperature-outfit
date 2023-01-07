import React, { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { codyThumbnail } from 'recoil/atom/editState';
type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};
export const ImageInput = ({ register, setValue }: Props) => {
  const { ref, onChange, ...rest } = register('image');
  const clothesInputRef = useRef<HTMLInputElement | null>(null);

  const [thumbnail, setThumbnail] = useRecoilState(codyThumbnail);

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setThumbnail('');

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setThumbnail(String(fileReader.result!));
      };
    }
  };

  return (
    <Container>
      <InputButton
        id="clothesImage"
        type="file"
        accept="image/*"
        onChange={(e) => {
          addImage(e);
          onChange(e);
        }}
        {...rest}
        ref={(e) => {
          ref(e);
          clothesInputRef.current = e;
        }}
      />
      <ImageWrapper>
        <Image
          src={thumbnail || '/cody.jpg'}
          alt="clothes"
          layout="fill"
          onClick={() =>
            clothesInputRef.current && clothesInputRef.current.click()
          }
        />
        <ButtonWrapper>
          <Btn
            onClick={() => {
              setThumbnail('');
              setValue('image', null);
            }}>
            기본 사진
          </Btn>
        </ButtonWrapper>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  gap: 12px 0;
`;

const InputButton = styled.input`
  display: none;
`;

const ImageWrapper = styled.section`
  display: flex;
  position: relative;
  height: 100%;
  border-radius: 10px;
  background-color: #c4c4c450;
  box-shadow: 1px 1px 5px -1px #bbb;
  border-radius: 4px;
`;

const ButtonWrapper = styled.section`
  position: absolute;
  right: 4px;
  bottom: 6px;
  z-index: 1;
`;

const Btn = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px 0px;
  height: 28px;
  border-radius: 10px;
  background-color: ${customColor.white};
  background-color: ${customColor.gray};
  box-shadow: 2px 3px 1px 0px #aaa;
  cursor: pointer;
  &:hover {
    background-color: #c6c7c9;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 3px);
  }
`;
