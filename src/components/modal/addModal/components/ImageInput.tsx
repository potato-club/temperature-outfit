import React, { useState, ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import Image from 'next/image';
import { IoMdImage } from 'react-icons/io';
import { customColor } from 'constants/index';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { infoModal } from 'utils/interactionModal';
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
          <Image
            width={360}
            height={360}
            src={thumbnail}
            alt="clothes"
            onClick={() =>
              clothesInputRef.current && clothesInputRef.current.click()
            }
          />
        ) : (
          <InitialImage
            size={360}
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
          <section className="errorWrapper">
            <TypoGraphy color="red">{message}</TypoGraphy>
          </section>
        )}
      />
    </>
  );
};

const InputButton = styled.input`
  display: none;
`;

const InitialImage = styled(IoMdImage)`
  width: 100%;
  background-color: ${customColor.gray};
  border-radius: 40px;
`;

const ImageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
