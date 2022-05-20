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
  const [selectedValue, setSelectedValue] = React.useState('a');

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
        {...controlProps('a')}
        sx={{
          color: red[500],
          '&.Mui-checked': {
            color: red[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: orange[500],
          '&.Mui-checked': {
            color: orange[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: yellow[500],
          '&.Mui-checked': {
            color: yellow[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: green[500],
          '&.Mui-checked': {
            color: green[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: cyan[500],
          '&.Mui-checked': {
            color: cyan[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: blue[500],
          '&.Mui-checked': {
            color: blue[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: purple[500],
          '&.Mui-checked': {
            color: purple[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: grey[500],
          '&.Mui-checked': {
            color: grey[500],
          },
        }}
      />
      <Radio
        {...controlProps('a')}
        sx={{
          color: grey[900],
          '&.Mui-checked': {
            color: grey[900],
          },
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  display: flex;
`;
