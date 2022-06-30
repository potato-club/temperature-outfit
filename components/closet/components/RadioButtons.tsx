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

export const RadioButtons: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState('red');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <Wrapper>
      <Radio
        {...controlProps('red')}
        sx={{
          color: red[500],
          '&.Mui-checked': {
            color: red[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('orange')}
        sx={{
          color: orange[500],
          '&.Mui-checked': {
            color: orange[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('yellow')}
        sx={{
          color: yellow[500],
          '&.Mui-checked': {
            color: yellow[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('green')}
        sx={{
          color: green[500],
          '&.Mui-checked': {
            color: green[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('cyan')}
        sx={{
          color: cyan[500],
          '&.Mui-checked': {
            color: cyan[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('blue')}
        sx={{
          color: blue[500],
          '&.Mui-checked': {
            color: blue[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('purple')}
        sx={{
          color: purple[500],
          '&.Mui-checked': {
            color: purple[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
      <Radio
        {...controlProps('gray')}
        sx={{
          color: grey[500],
          '&.Mui-checked': {
            color: grey[500],
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex: 4;
  display: flex;
`;
