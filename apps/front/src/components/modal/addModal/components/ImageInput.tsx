import React, { useState, ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { IoMdImage } from 'react-icons/io';
import { customColor } from 'constants/index';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const ImageInput = ({ register, errors }: Props) => {
  const { ref, onChange, ...rest } = register('image', {
    required: '이미지를 선택해주세요',
  });
  const clothesInputRef = useRef<HTMLInputElement | null>(null);

  const [thumbnail, setThumbnail] = useState<string>('');

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setThumbnail(''); // 취소했을때 썸네일도 지워야함

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setThumbnail(String(fileReader.result!));
      };
    }
  };

  return (
    <>
      <InputButton
        id="clothesImage"
        type="file"
        accept="image/*"
        style={{ objectFit: 'cover' }}
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
        {thumbnail ? (
          <RelativeImg>
            <Image
              src={thumbnail}
              layout="fill"
              alt="clothes"
              objectFit='contain'
              onClick={() =>
                clothesInputRef.current && clothesInputRef.current.click()
              }
            />
          </RelativeImg>
        ) : (
          <InitialImage
            size={120}
            opacity={0.5}
            onClick={() =>
              clothesInputRef.current && clothesInputRef.current.click()
            }
          />
        )}
      </ImageWrapper>
      <ErrorMessage
        name="image"
        errors={errors}
        render={({ message }) => (
          <section className="errorWrapper">{message}</section>
        )}
      />
    </>
  );
};

const InputButton = styled.input`
  display: none;
  font-family: 'LeferiPoint-WhiteObliqueA';
`;

const RelativeImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const InitialImage = styled(IoMdImage)`
  display: flex;
  width: 100%;
  background-color: ${customColor.grayLight};
  height: 100%;
`;

const ImageWrapper = styled.div`
  margin-top: 12px;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
`;
