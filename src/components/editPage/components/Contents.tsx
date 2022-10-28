import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox } from './index';
import { categories } from 'constants/categories';
import { ChooseModal } from 'components/modal';
import { Control, FieldErrorsImpl, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
type Props = {
  day: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
};
export const Contents = ({
  day,
  register,
  errors,
  setValue,
  control,
}: Props) => {
  return (
    <Container>
      <CodyBox>
        {categories.map((data, index) => (
          <Category key={index}>
            <TypoGraphy type="Title" fontWeight="bold">
              {data.label}
            </TypoGraphy>
            <DressRoom
              category={data.label}
              id={data.id}
              recoil={data.recoil}
            />
          </Category>
        ))}
      </CodyBox>
      <ReviewBox
        day={day}
        register={register}
        errors={errors}
        setValue={setValue}
        control={control}
      />
      <ChooseModal />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  gap: 0 28px;
`;

const Category = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CodyBox = styled.section`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 10px;
  background-color: #c4c4c450;
  overflow-y: auto;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(150, 137, 235, 0.6);
    border-radius: 24px;
  }
`;

export const MemoContents = React.memo(Contents);