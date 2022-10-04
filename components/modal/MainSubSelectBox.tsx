import React from 'react';
import styled from '@emotion/styled';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { CategoryDetail } from 'constants/types';
import { clothesSubCategory } from 'constants/index';
import { useState, useEffect } from 'react';
import { clothesMainCategory } from 'constants/index';

type Props = {
  register: UseFormRegister<FieldValues>;
};
export const MainSubSelectBox = ({ register }: Props) => {
  const [mainCategory, setMainCategory] = useState('top');
  return (
    <>
      <Wrapper>
        <select
          {...register('main')}
          onChange={(e) => setMainCategory(e.target.value)}>
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
        <select {...register('sub')}>
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
