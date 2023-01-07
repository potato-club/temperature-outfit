import { MenuItem, Select } from '@mui/material';
import { clothesSubCategory } from 'constants/index';
import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import { CategoryDetail } from 'types/common/categoryDetail.type';
type Props = {
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
  mainCategory: string;
};
export const SubSelectBoxForm = ({
  control,
  mainCategory,
  setValue,
}: Props) => {
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
          <CustomSelect
            value={mainId.includes(value) ? value : ''}
            onChange={onChange}>
            {clothesSubCategory[mainCategory]
              .slice(1)
              .map((data: CategoryDetail) => (
                <CustomMenuItem value={data.id} key={data.id}>
                  {data.name}
                </CustomMenuItem>
              ))}
          </CustomSelect>
        )}
      />
    </>
  );
};
const CustomSelect = styled(Select)`
  width: 100%;
  height: 4vh;
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
