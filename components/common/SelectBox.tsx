import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { CategoryDetail } from 'constants/types';

type Props = {
  width?: number;
  dataArray: CategoryDetail[];
  label: string;
  subCategoryChange?: Function;
};

export const SelectBox: React.FC<Props> = ({
  width = 80,
  dataArray,
  label,
  subCategoryChange,
}) => {
  const [selected, setSelected] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    subCategoryChange?.(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: width }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={selected}
        onChange={handleChange}
        label={label}>
        {Array.isArray(dataArray) && dataArray.map((data, index) => (
          <MenuItem value={data.id} key={index}>
            {data.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
