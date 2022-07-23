import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CategoryDetail } from 'constants/types';
import { clothesSubCategory } from 'constants/index';

type Props = {
  width?: number;
  dataArray: CategoryDetail[];
  label: string;
  categoryChange?: Dispatch<SetStateAction<string>>;
  changeSubByMain?: Dispatch<SetStateAction<string>>;
  value: string;
};

export const SelectBox: React.FC<Props> = ({
  width = 80,
  dataArray,
  label,
  value,
  categoryChange,
  changeSubByMain,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    changeSubByMain && changeSubByMain('');
    categoryChange && categoryChange(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: width }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        label={label}>
        {dataArray.map((data, index) => (
          <MenuItem value={data.id} key={index}>
            {data.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
