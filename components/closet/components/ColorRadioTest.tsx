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
import { FieldValues, UseFormRegister } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
};
export const ColorRadioTest = ({ register }: Props) => {
  const colorName = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
    'grey',
    'black',
  ];
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
    [index: string] : Object;
  }


  return (
    <Wrapper>
      {Object.keys(colors).map((data) => {
        console.log(data);
        console.log(colors[data]);
      })}
      {/* <Radio
        {...register('food', { required: true })}
        value="Pizza"
        id="pizza"
      />{' '}
      {colors.map((data, i) => (
        <Radio
          key={i}
          {...controlProps(colorName[i])}
          sx={{
            color: data[500],
            '&.Mui-checked': {
              color: data[500],
            },
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          }}
        />
      ))}
      <Radio
        {...controlProps('black')}
        sx={{
          color: grey[900],
          '&.Mui-checked': {
            color: grey[900],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('white')}
        sx={{
          color: grey[100],
          '&.Mui-checked': {
            color: grey[100],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      /> */}
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
