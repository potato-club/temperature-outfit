import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CustomButton, SelectBox, TypoGraphy } from 'components/common';
import { ColorRadio } from 'components/closet/components';
import Image from 'next/image';
import { IoMdImage } from 'react-icons/io';
import { customColor } from 'constants/index';
import { useRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { infoModal } from 'utils/interactionModal';
import {
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  // watch: UseFormWatch<FieldValues>;
};
export const ClothesInput = ({ register, errors }: Props) => {
  const { ref, onChange, ...rest } = register('image', {required: '테스트입니다'});
  const clothesInputRef = useRef<HTMLInputElement | null>(null);

  const [thumbnail, setThumbnail] = useState<string>('');
  // const { watch } = useForm();
  // const clothesImage = watch('clothesImage');

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setThumbnail(String(fileReader.result!));
      };
      infoModal('옷 사진 등록완료!', 'success');
    }
  };

  // useEffect(() => {
  //   if (clothesImage && clothesImage.length > 0) {
  //     const file = clothesImage[0];
  //     setThumbnail(URL.createObjectURL(file));
  //   }
  // }, [clothesImage]);

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
      <ErrorMessage name="image" errors={errors} />
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
