import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { clothesMainCategory } from 'constants/index';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select } from '@mui/material';
import { SubSelectBox } from './SubSelectBox';
import { CategoryDetail } from 'types/common/categoryDetail.type';

export const MainSubSelectBox = () => {
  const [mainCategory, setMainCategory] = useState('all');

  return (
    <>
      <Wrapper>
        <FormControl>
          <Select
            onChange={(e) => setMainCategory(e.target.value as string)}
            value={mainCategory}>
            {clothesMainCategory.map((data: CategoryDetail) => (
              <MenuItem value={data.id} key={data.id}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Wrapper>
      <Wrapper>
        <SubSelectBox mainCategory={mainCategory} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 112px;
`;
