import styled from '@emotion/styled';
import { useState } from 'react';

export const SelectLocation: React.FC = () => {
  type SelectChangeEvent<T = string> = Event & {
    target: {
      value: T;
      name: string;
    };
  };

  const location = ['서울', '수원', '인천', '성남', '부산'];
  const [selectLocation, setSelectLocation] = useState('');

  const ondChange = (event: SelectChangeEvent) => {
    setSelectLocation(event.target.value);
  };
  return (
    <Wrapper>
      <SelectBox name="위치" value={selectLocation}>
        <MenuItem disabled selected>
          위치
        </MenuItem>

        {location.map((location) => (
          <MenuItem>{location}</MenuItem>
        ))}
      </SelectBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SelectBox = styled.select``;

const MenuItem = styled.option``;
