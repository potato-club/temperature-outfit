import { MenuItem, Select } from '@mui/material';
import { CategoryDetail, clothesSubCategory } from 'constants/index';
import React, { useEffect, useState } from 'react'
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  mainCategory: string;
};
export const SubSelectBox = ({ register,setValue, getValues, mainCategory }: Props) => {
  const [sub, setSub] = useState('');
  const { onChange, ...rest } = register('category');

    useEffect(() => {
      setSub(clothesSubCategory[mainCategory][1].id);
    }, [mainCategory]);

    useEffect(() => {
      setValue('category', clothesSubCategory[mainCategory][1].id);
      setSub(clothesSubCategory[mainCategory][1].id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <Select
      {...rest}
      value={getValues('category') === sub ? sub : ''} // 서브카테고리가 메인카테고리 범위안에 있는지 확인하기 위한 코드
      onChange={(e) => {
        setSub(e.target.value);
        setValue('category', e.target.value);
      }}>
      {clothesSubCategory[mainCategory].slice(1).map((data: CategoryDetail) => (
        <MenuItem value={data.id} key={data.id}>
          {data.name}
        </MenuItem>
      ))}
    </Select>
  );
};
