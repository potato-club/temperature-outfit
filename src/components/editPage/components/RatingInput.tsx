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
      <RatingWrapper>
        <Controller
          name="rating"
          control={control}
          rules={{ required: '만족도를 선택해주세요' }}
          render={({ field: { onChange, value } }) => (
            <Rating
              onClick={onChange}
              ratingValue={value}
              size={36}
              allowHalfIcon
              transition
              fillColor={customColor.yellow}
              emptyColor="gray"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="rating"
          render={({ message }) => (
            <CustomErrorMessage>{message}</CustomErrorMessage>
          )}
        />
      </RatingWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const RatingWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 0px 20px;
  position: relative;
`;

const RatingTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 6px;
`;

const CustomErrorMessage = styled.div`
  font-size: 0.8rem;
  font-family: 'LeferiPoint-WhiteObliqueA';
  color: ${customColor.red};
  font-weight: bold;
  position: absolute;
  bottom: -14px;
  left: 24px;
`;
