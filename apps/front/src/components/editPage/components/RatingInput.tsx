import { TypoGraphy } from 'components/common';
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { Control, Controller, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
type Props = {
  control: Control<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const RatingInput = ({ control, errors }: Props) => {

  return (
    <Container>
      <TypoGraphy type="Title" fontWeight="bold">
        만족도
      </TypoGraphy>
      <Wrapper>
        <Controller
          name="rating"
          control={control}
          rules={{ required: '점수를 매겨주세요' }}
          render={({ field: { onChange, value } }) => (
            <Rating
              onClick={onChange}
              ratingValue={value}
              size={40}
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${customColor.brandColor5};
  margin-bottom: 40px;
`;
