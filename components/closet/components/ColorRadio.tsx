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
import { HiOutlineX } from 'react-icons/hi';
type Props = {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  filter? : boolean;
  color: string;
};
export const ColorRadio = ({ setColor, filter, color }: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor && setColor(event.target.value);
  };

  const noFilter = () => {
    setColor && setColor('');
  };

  const controlProps = (item: string) => ({
    checked: color === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

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
  const colors = [red, orange, yellow, green, cyan, blue, purple, grey];

  return (
    <Wrapper>
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
      />
      {filter && (
        <IconWrapper
          onClick={() => {
            noFilter();
          }}>
          <HiOutlineX size={30} />
        </IconWrapper>
      )}
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
