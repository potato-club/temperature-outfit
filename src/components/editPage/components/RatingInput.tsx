import { TypoGraphy } from 'components/common';
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from '@emotion/styled';
import { MdThumbUp } from 'react-icons/md';
import { customColor } from 'constants/index';
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
type Props = {
  control: Control<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const RatingInput = ({ control, errors }: Props) => {
  return (
    <Container>
      <RatingTitle>
        <Icon>
          <MdThumbUp fontSize="24px" />
        </Icon>
        <TypoGraphy type="h1" fontWeight="bold">
          만족도
        </TypoGraphy>
      </RatingTitle>
      <Wrapper>
        <Controller
          name="rating"
          control={control}
          rules={{ required: '점수를 매겨주세요' }}
          render={({ field: { onChange, value } }) => (
            <Rating
              onClick={onChange}
              ratingValue={value}
              size={44}
              allowHalfIcon
              transition
              fillColor="orange"
              emptyColor="gray"
            />
          )}
        />
      </Wrapper>
      <ErrorMessage
        errors={errors}
        name="rating"
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

const Wrapper = styled.section`
  /* width: 180px; */
  /* display: flex; */
  margin-left: 12px;
  /* justify-content: center; */
  /* border-radius: 36px; */
  /* background-color: ${customColor.brandColor5}; */
  margin-bottom: 16px;
  /* box-shadow: 2px 2px 5px -1px #bbb; */
`;
const RatingTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.div`
  margin-right: 6px;
`;
