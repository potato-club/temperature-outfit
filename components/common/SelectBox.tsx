import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Dispatch, SetStateAction, useState } from 'react';
import { CategoryDetail } from 'constants/types';

type Props = {
  width?: number;
  dataArray: CategoryDetail[];
  label: string;
  categoryChange?: Dispatch<SetStateAction<string>>;
  changeSubByMain?: Dispatch<SetStateAction<string>>;
  initData? : string;
  initLabel? : string;
};

export const SelectBox: React.FC<Props> = ({
  width = 80,
  dataArray,
  label,
  categoryChange,
  changeSubByMain,
  initData,
  initLabel,
}) => {
  const [selected, setSelected] = useState(initData ? initData : '');

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    categoryChange && categoryChange(event.target.value);
    changeSubByMain && changeSubByMain('');
  };

  return (
    <FormControl sx={{ minWidth: width }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={selected}
        onChange={handleChange}
        label={label}
        defaultValue={initLabel}
        >
        {dataArray.map((data, index) => (
          <MenuItem value={data.id} key={index}>
            {data.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
