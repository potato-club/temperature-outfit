import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type Props = {
  allLocations: any;
  myLocation: string;
  changeUserLocations: (data: number) => Promise<void>;
};

export const LocationSelectBox: React.FC<Props> = ({
  allLocations,
  myLocation,
  changeUserLocations,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    changeUserLocations(Number(event.target.value));
  };

  return (
    <FormControl sx={{ minWidth: '80px' }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label">지역</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={myLocation}
        onChange={handleChange}
        label="지역">
        {allLocations.map(({ id, name }: any) => (
          <MenuItem value={id} key={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
