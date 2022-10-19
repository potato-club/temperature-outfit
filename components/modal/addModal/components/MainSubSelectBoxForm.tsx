import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { CategoryDetail } from 'constants/types';
import { clothesSubCategory } from 'constants/index';
import { useState, useEffect } from 'react';
import { clothesMainCategory } from 'constants/index';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SubSelectBoxForm } from './SubSelectBoxForm';

type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
};
export const MainSubSelectBoxForm = ({ register, setValue, control }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');

  return (
    <>
      <Wrapper>
        <Select onChange={(e) => setMainCategory(e.target.value as string)} value={mainCategory}>
          {clothesMainCategory.slice(1).map((data: CategoryDetail) => (
            <MenuItem value={data.id} key={data.id}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </Wrapper>
      <Wrapper>
        <SubSelectBoxForm
          register={register}
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
