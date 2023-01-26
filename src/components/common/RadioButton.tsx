import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

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
          color: customColor.red,
          '&.Mui-checked': {
            color: customColor.red,
          },
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
