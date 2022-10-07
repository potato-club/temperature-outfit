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

type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
};
export const MainSubSelectBox = ({ register, setValue, getValues }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');
  const [sub, setSub] = useState('');
  const { onChange, ...rest } = register('category');

  const changeMainCategory = useCallback(
    (e: SelectChangeEvent) => {
      const selectedMain = e.target.value as string;
      setMainCategory(selectedMain);
      setValue('category', clothesSubCategory[selectedMain][1].id);
    },
    [setValue],
  );
  useEffect(() => {
    setSub(clothesSubCategory[mainCategory][1].id);
  }, [mainCategory]);

  useEffect(() => {
    setValue('category', clothesSubCategory[mainCategory][1].id);
    setSub(clothesSubCategory[mainCategory][1].id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Select
          {...rest}
          value={getValues('category') === sub ? sub : ''} // 서브카테고리가 메인카테고리 범위안에 있는지 확인하기 위한 코드
          onChange={(e) => {
            setSub(e.target.value);
            setValue('category', e.target.value);
          }}>
          {clothesSubCategory[mainCategory]
            .slice(1)
            .map((data: CategoryDetail) => (
              <MenuItem value={data.id} key={data.id}>
                {data.name}
              </MenuItem>
            ))}
        </Select>
      </Wrapper>
      )
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
