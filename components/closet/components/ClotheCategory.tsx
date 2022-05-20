import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const ClotheCategory: React.FC = () => {
  const [clothes, setClothes] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setClothes(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Clothes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={clothes}
          label="Clothes"
          onChange={handleChange}>
          <MenuItem value={10}>아우터</MenuItem>
          <MenuItem value={20}>상의</MenuItem>
          <MenuItem value={30}>하의</MenuItem>
          <MenuItem value={30}>신발</MenuItem>
          <MenuItem value={30}>기타</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
