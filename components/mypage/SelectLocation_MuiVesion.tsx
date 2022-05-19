import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

export const SelectLocation_MuiVesion: React.FC = () => {
  const [selectLocation, setSelectLocation] = useState('');
  const location = ['서울', '부산', '인천', '수원', '성남'];
  const handleChange = (event: SelectChangeEvent) => {
    setSelectLocation(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 50 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={selectLocation}
        onChange={handleChange}
        autoWidth
        label="위치">
        {location.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const Wrapper = styled.div``;
