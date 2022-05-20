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

export const RadioButton: React.FC = () => {
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
          color: red[800],
          '&.Mui-checked': {
            color: red[800],
          },
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
