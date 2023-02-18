import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { clothesMainCategory } from 'constants/index';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select } from '@mui/material';
import { SubSelectBox } from './SubSelectBox';
import { CategoryResponse } from '@temperature-outfit/core';

export const MainSubSelectBox = () => {
  const [mainCategory, setMainCategory] = useState('all');

  return (
    <>
      <Wrapper>
        <FormControl>
          <CustomSelect
            onChange={(e) => setMainCategory(e.target.value as string)}
            value={mainCategory}>
            {clothesMainCategory.map((data: CategoryResponse) => (
              <CustomMenuItem value={data.id} key={data.id}>
                {data.name}
              </CustomMenuItem>
            ))}
          </CustomSelect>
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
const CustomSelect = styled(Select)`
  width: 108px;
  height: 48px;
  border-radius: 12px;
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 15px;
  font-weight: 700;
  padding-top: 4px;
`;

const CustomMenuItem = styled(MenuItem)`
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-weight: 700;
  font-size: 15px;
`;
