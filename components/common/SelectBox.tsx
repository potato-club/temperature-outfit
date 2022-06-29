import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { clothesCategory, subClothesCategory } from 'constants/index';

interface Array {
  name: string;
  value: string | string[];
}
type Props = {
  width?: number;
  propsArray: Array[];
  label: string;
};

export const SelectBox: React.FC<Props> = ({ width, propsArray, label }) => {
  const [selected, setSelected] = useState('');
  const [subSelected, setSubSelected] = useState('');
  const [subCategory, setSubCategory] = useState(['']);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);

    if (event.target.value == 'top') {
      setSubCategory(subClothesCategory.top);
    } else if (event.target.value == 'bottom') {
      setSubCategory(subClothesCategory.bottom);
    } else if (event.target.value == 'shoes') {
      setSubCategory(subClothesCategory.shoes);
    } else if (event.target.value === 'others') {
      setSubCategory(subClothesCategory.others);
    }
  };

  const subHandleChange = (event: SelectChangeEvent) => {
    setSubSelected(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ minWidth: width || 80 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selected}
          onChange={handleChange}
          label={label}>
          {propsArray.map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {propsArray === clothesCategory ? (
        <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">
            {selected}
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={subSelected}
            onChange={subHandleChange}
            label={selected}>
            {subCategory.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
    </>
  );
};
