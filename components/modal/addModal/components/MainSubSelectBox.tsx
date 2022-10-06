import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { CategoryDetail } from 'constants/types';
import { clothesSubCategory } from 'constants/index';
import { useState, ChangeEvent } from "react";
import { clothesMainCategory } from 'constants/index';

type Props = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};
export const MainSubSelectBox = ({ register, setValue }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');
  
  const changeMainCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMain = e.target.value as string;
    setMainCategory(selectedMain);
    setValue('category', clothesSubCategory[selectedMain][1].id);
  }, [setValue]);

  return (
    <>
      <Wrapper>
        <select {...register('main')} onChange={changeMainCategory}>
          {clothesMainCategory.slice(1).map((data: CategoryDetail) => (
            <option
              value={data.id}
              key={data.id}
              onChange={() => setMainCategory(data.id)}>
              {data.name}
            </option>
          ))}
        </select>
      </Wrapper>
      <Wrapper>
        <select {...register('category')}>
          {clothesSubCategory[mainCategory]
            .slice(1)
            .map((data: CategoryDetail) => (
              <option value={data.id} key={data.id}>
                {data.name}
              </option>
            ))}
        </select>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
