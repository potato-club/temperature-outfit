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
      </ImageWrapper>
      <ButtonWrapper>
        <Btn
          onClick={() => {
            setThumbnail('');
            setValue('image', null);
          }}>
          기본 사진
        </Btn>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px 0;
`;

const InputButton = styled.input`
  display: none;
`;

const ImageWrapper = styled.section`
  position: relative;
  width: 350px;
  height: 65vh;
  border-radius: 10px;
  background-color: #c4c4c450;
  box-shadow: 1px 1px 5px -1px #bbb;
`;

const ButtonWrapper = styled.section`
  position: absolute;
  right: 0;
  bottom: -40px;
  z-index: 1;
`;

const Btn = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
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
