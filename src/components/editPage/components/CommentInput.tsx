import React from 'react';
import styled from '@emotion/styled';
import { ErrorMessage } from '@hookform/error-message';
import { TypoGraphy } from 'components/common';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const CommentInput = ({ register, errors }: Props) => {
  return (
    <Container>
      <TypoGraphy type="Title" fontWeight="bold">
        후기
      </TypoGraphy>
      <TextArea
        placeholder="후기를 입력해주세요"
        {...register('comment', { required: '후기를 입력해주세요' })}
      />
      <ErrorMessage
        errors={errors}
        name="comment"
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
  gap: 12px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  resize: none;
  padding: 8px;
  box-sizing: border-box;
  outline: none;
  ::-webkit-scrollbar {
    opacity: 0;
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 226, 255, 0.8);
    border-radius: 24px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;