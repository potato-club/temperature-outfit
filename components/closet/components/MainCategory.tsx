import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SetStateAction } from 'react';
type Props = {
  setClothes: React.Dispatch<SetStateAction<string>>;
};
export const MainCategory = ({ setClothes }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setClothes(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Clothes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Clothes"
          onChange={handleChange}>
          <MenuItem value={'outer'}>아우터</MenuItem>
          <MenuItem value={'top'}>상의</MenuItem>
          <MenuItem value={'bottom'}>하의</MenuItem>
          <MenuItem value={'shoes'}>신발</MenuItem>
          <MenuItem value={'etc'}>기타</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
