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
import { SubSelectBox } from './SubSelectBox';

type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
};
export const MainSubSelectBox = ({ register, setValue, getValues }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');

  const changeMainCategory = useCallback(
    (e: SelectChangeEvent) => {
      const selectedMain = e.target.value as string;
      setMainCategory(selectedMain);
      setValue('category', clothesSubCategory[selectedMain][1].id);
    },
    [setValue],
  );

  return (
    <>
      <Wrapper>
        <Select onChange={changeMainCategory} value={mainCategory}>
          {clothesMainCategory.slice(1).map((data: CategoryDetail) => (
            <MenuItem value={data.id} key={data.id}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </Wrapper>
      <Wrapper>
        <SubSelectBox
          register={register}
          setValue={setValue}
          getValues={getValues}
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
