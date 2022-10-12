import { MenuItem, Select } from '@mui/material';
import { CategoryDetail, clothesSubCategory } from 'constants/index';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
  mainCategory: string;
};
export const SubSelectBox = ({ control, mainCategory, setValue }: Props) => {
  const mainId = useMemo(
    () => clothesSubCategory[mainCategory].slice(1).map((data) => data.id),
    [mainCategory],
  );

  useEffect(() => {
    setValue('categoryId', mainId[0]);
  }, [setValue, mainId]);

  return (
    <Controller
      name="categoryId"
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select value={mainId.includes(value) ? value : ''} onChange={onChange}>
          {clothesSubCategory[mainCategory]
            .slice(1)
            .map((data: CategoryDetail) => (
              <MenuItem value={data.id} key={data.id}>
                {data.name}
              </MenuItem>
            ))}
        </Select>
      )}
    />
  );
};

// <Select
//   {...rest}
//   value={getValues('category') === sub ? sub : ''} // 서브카테고리가 메인카테고리 범위안에 있는지 확인하기 위한 코드
//   onChange={(e) => {
//     setSub(e.target.value);
//     setValue('category', e.target.value);
//   }}>
//   {clothesSubCategory[mainCategory]
//     .slice(1)
//     .map((data: CategoryDetail) => (
//       <MenuItem value={data.id} key={data.id}>
//         {data.name}
//       </MenuItem>
//     ))}
// </Select>;
