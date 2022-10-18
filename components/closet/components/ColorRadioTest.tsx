import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
  UseFormReset,
  UseFormResetField,
} from 'react-hook-form';
import { radioBtnColor } from 'constants/customColor';
import { HiOutlineX } from 'react-icons/hi';
type Props = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  resetBtn?: boolean;
  resetField?: UseFormResetField<FieldValues>;
};
export const ColorRadioTest = ({ register, control, resetBtn, resetField }: Props) => {
  return (
    <Wrapper>
      <Controller
        name="color"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {Object.keys(radioBtnColor).map((colorKey) => (
              <Radio
                {...register}
                onChange={onChange}
                value={colorKey}
                key={colorKey}
                checked={colorKey === value}
                sx={{
                  color: radioBtnColor[colorKey],
                  '&.Mui-checked': {
                    color: radioBtnColor[colorKey],
                  },
                }}
              />
            ))}
            {resetBtn && resetField && (
              <IconWrapper
                onClick={() => {
                  resetField('color')
                }}>
                <HiOutlineX size={30} />
              </IconWrapper>
            )}
          </>
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  background-color: #3b7bc43d;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 0 8px;
`;

const IconWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
