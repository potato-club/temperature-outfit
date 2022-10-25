import React from 'react';
import styled from '@emotion/styled';
import {
  Control,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import { useState } from 'react';
import { clothesMainCategory } from 'constants/index';
import { MenuItem, Select } from '@mui/material';
import { SubSelectBoxForm } from './SubSelectBoxForm';
import { CategoryDetail } from 'types/temp/categoryDetail.type';

type Props = {
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
};
export const MainSubSelectBoxForm = ({ setValue, control }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');

  return (
    <>
      <Wrapper>
        <Select
          onChange={(e) => setMainCategory(e.target.value as string)}
          value={mainCategory}>
          {clothesMainCategory.slice(1).map((data: CategoryDetail) => (
            <MenuItem value={data.id} key={data.id}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </Wrapper>
      <Wrapper>
        <SubSelectBoxForm
          setValue={setValue}
          control={control}
          mainCategory={mainCategory}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
