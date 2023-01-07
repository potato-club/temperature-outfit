import React from 'react';
import styled from '@emotion/styled';
import { ErrorMessage } from '@hookform/error-message';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const NameInput = ({ register, errors }: Props) => {
  return (
    <Wrapper>
      <Container>
        <Input
          placeholder="옷의 이름을 입력해주세요."
          {...register('name', { required: '이름을 입력해주세요' })}
        />
      </Container>
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => (
          <section className="errorWrapper">{message}</section>
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  /* font-family: 'LeferiPoint-WhiteObliqueA'; */
  font-size: 16px;
  height: 36px;
  border-radius: 12px;
  border: 2px solid ${customColor.gray};
  padding-left: 10px;
  margin-top: 4px;
  &:focus {
    outline: none;
    border: 2px solid #1976d2;
  }
`;
