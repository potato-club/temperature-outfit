import React from 'react';
import styled from '@emotion/styled';
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';
import { useState } from 'react';
import { clothesMainCategory } from 'constants/index';
import { MenuItem, Select } from '@mui/material';
import { SubSelectBoxForm } from './SubSelectBoxForm';
import { CategoryDetail } from 'types/common/categoryDetail.type';

type Props = {
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
};
export const MainSubSelectBoxForm = ({ setValue, control }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');

  return (
    <>
      <Wrapper>
        <CustomSelect
          onChange={(e) => setMainCategory(e.target.value as string)}
          value={mainCategory}>
          {clothesMainCategory.slice(1).map((data: CategoryDetail) => (
            <CustomMenuItem value={data.id} key={data.id}>
              {data.name}
            </CustomMenuItem>
          ))}
        </CustomSelect>
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
