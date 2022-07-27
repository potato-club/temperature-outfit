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
  setColor?: React.Dispatch<React.SetStateAction<string>>;
};
export const RadioButtons = ({ setColor }: Props) => {
  const [selectedValue, setSelectedValue] = React.useState('red');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setColor && setColor(event.target.value);
  };

  const noFilter = () => {
    setSelectedValue('');
    setColor && setColor('');
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
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
    'gray',
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
      <IconWrapper
        onClick={() => {
          noFilter();
        }}>
        <HiOutlineX size={30} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #a9e4e4;
  border-radius: 10px;
  padding: 0 8px;
`;

const IconWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
