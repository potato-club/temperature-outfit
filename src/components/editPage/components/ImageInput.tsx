import React, { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { codyThumbnail } from 'recoil/atom/editState';
import { InitPhotoButton } from './InitPhotoButton';
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
        <InitPhotoButton
          onClick={() => {
            setThumbnail('');
            setValue('image', null);
          }}
        />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 50vh;
  gap: 12px 0;
`;

const InputButton = styled.input`
  display: none;
`;

const ImageWrapper = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${customColor.black + '50'};
  box-shadow: 1px 1px 5px -1px ${customColor.grayLight};
  border-radius: 4px;
`;
