import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { radioBtnColor } from 'constants/customColor';
type Props = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
};
export const ColorRadioTest = ({ register, control }: Props) => {
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
