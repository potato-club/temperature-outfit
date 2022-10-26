import { TypoGraphy } from 'components/common';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { Control, Controller, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
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
