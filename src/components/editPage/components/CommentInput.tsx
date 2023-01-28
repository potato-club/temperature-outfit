import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { FaComments } from 'react-icons/fa';
import { customColor } from 'constants/index';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const CommentInput = ({ register }: Props) => {
  return (
    <Container>
      <ReviewTitle>
        <Icon>
          <FaComments fontSize="24px" />
        </Icon>
        <TypoGraphy type="h1" fontWeight="bold">
          후기
        </TypoGraphy>
      </ReviewTitle>
      <TextArea placeholder="후기를 입력해주세요" {...register('comment')} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
const ReviewTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.div`
  margin-right: 6px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  border: none;
  box-shadow: 1px 1px 5px -1px ${customColor.grayDark};
  resize: none;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 16px;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.grayDark};
    border-radius: 24px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
