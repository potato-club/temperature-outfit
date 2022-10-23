import { MenuItem, Select } from '@mui/material';
import { CategoryDetail, clothesSubCategory } from 'constants/index';
import React, { useEffect, useMemo } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
type Props = {
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
  mainCategory: string;
};
export const SubSelectBoxForm = ({ control, mainCategory, setValue }: Props) => {
  const mainId = useMemo(
    () => clothesSubCategory[mainCategory].slice(1).map((data) => data.id),
    [mainCategory],
  );

  useEffect(() => {
    setValue('categoryId', mainId[0]);
  }, [setValue, mainId]);

  return (
    <>
      <Controller
        name="categoryId"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            value={mainId.includes(value) ? value : ''}
            onChange={onChange}>
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
    </>
  );
};
