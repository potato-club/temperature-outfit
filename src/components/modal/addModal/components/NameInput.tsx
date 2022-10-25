import React from 'react'
import styled from "@emotion/styled";
import { ErrorMessage } from '@hookform/error-message';
import { TypoGraphy } from "components/common";
import { customColor } from 'constants/index';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const NameInput = ({ register, errors }:Props) => {
  return (
    <Container>
      <Input
        placeholder="옷의 이름을 입력해주세요."
        {...register('name', { required: '상품명을 입력해주세요' })}
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => (
          <section className="errorWrapper">
            <TypoGraphy color="red">{message}</TypoGraphy>
          </section>
        )}
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${customColor.gray};
  padding-left: 10px;
  margin-top: 4px;
`;