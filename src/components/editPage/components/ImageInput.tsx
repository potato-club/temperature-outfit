// AddModal 에 유사한코드 있음
// Todo : 재사용할수있는 로직이다 싶으면 재사용할것.

import React, { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import Image from 'next/image';
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { infoModal } from 'utils/interactionModal';
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
      infoModal('옷 사진 등록완료!', 'success');
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
      {/* <ErrorMessage
        name="image"
        errors={errors}
        render={({ message }) => (
          <section className="errorWrapper">
            <TypoGraphy color="red">{message}</TypoGraphy>
          </section>
        )}
      /> */}
      <ButtonWrapper>
        <CustomButton
          customType="colorful"
          text="기본 이미지로 설정"
          sidePadding="20"
          type="button"
          onClick={() => {
            setThumbnail('');
            setValue('image', null);
          }}
        />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const InputButton = styled.input`
  display: none;
`;

const ImageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
`;

const ButtonWrapper = styled.section`
  align-self: flex-end;
`;
