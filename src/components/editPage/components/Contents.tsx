import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox } from './index';
import { categories } from 'constants/categories';
import { ChooseModal } from 'components/modal';
import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
};
export const Contents = ({ register, errors, setValue, control }: Props) => {
  return (
    <Container>
      <CodyBox>
        {categories.map((data, index) => (
          <Category key={index}>
            <Label>
              <TypoGraphy type="h3" fontWeight="bold">
                {data.label}
              </TypoGraphy>
            </Label>
            <DressRoom
              category={data.label}
              id={data.id}
              recoil={data.recoil}
            />
          </Category>
        ))}
      </CodyBox>
      <ReviewBox
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
  margin-bottom: 12px;
`;
const Label = styled.div`
  margin-bottom: 4px;
`;
const CodyBox = styled.section`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0px;
  border-radius: 12px;
  background-color: #c4c4c450;
  box-shadow: 1px 1px 5px -1px #bbb;
  overflow-y: auto;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 26px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #1b3a4d66;
    border-radius: 24px;
    background-clip: padding-box;
    border: 8px solid transparent;
  }
`;

export const MemoContents = React.memo(Contents);
