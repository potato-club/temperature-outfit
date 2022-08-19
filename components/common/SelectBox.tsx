import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Dispatch, SetStateAction } from 'react';
import { clothesSubCategory } from 'constants/index';

type Props = {
  width?: number;
  dataArray: any;
  label: string;
  categoryChange?: Dispatch<SetStateAction<string>>;
  changeSubByMain?: Dispatch<SetStateAction<string>>;
  value: string;
  modal?: boolean;
};

export const SelectBox: React.FC<Props> = ({
  width = 80,
  dataArray,
  label,
  value,
  categoryChange,
  changeSubByMain,
  modal,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    changeSubByMain &&
      changeSubByMain(clothesSubCategory[event.target.value][modal ? 1 : 0].id);
    categoryChange && categoryChange?.(event.target.value);
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
        {dataArray.map((data: any) => (
          <MenuItem value={data.id} key={data.id}>
            {data.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
