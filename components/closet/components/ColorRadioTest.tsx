import * as React from 'react';
import Radio from '@mui/material/Radio';
import {
  red,
  orange,
  yellow,
  green,
  cyan,
  blue,
  purple,
  grey,
} from '@mui/material/colors';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
};
export const ColorRadioTest = ({ register, control }: Props) => {
  
  // const colors = [red, orange, yellow, green, cyan, blue, purple, grey];
  const colors: TestType = {
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    purple,
    grey,
  };

  type TestType = {
    [index: string]: TestType2;
  };

  type TestType2 = {
    [index: string]: string;
  };

  return (
    <Wrapper>
      <Controller
        name="color"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {Object.keys(colors).map((data) => (
              <Radio
                {...register}
                onChange={onChange}
                value={data}
                key={data}
                checked={data === value}
                sx={{
                  color: colors[data][500],
                  '&.Mui-checked': {
                    color: colors[data][500],
                  },
                }}
              />
            ))}
            <Radio
              {...register}
              onChange={onChange}
              value="black"
              checked={'black' === value}
              sx={{
                color: '#000000',
                '&.Mui-checked': {
                  color: '#000000',
                },
              }}
            />
            <Radio
              {...register}
              onChange={onChange}
              value="white"
              checked={'white' === value}
              sx={{
                color: '#FFFFFF',
                '&.Mui-checked': {
                  color: '#FFFFFF',
                },
              }}
            />
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
