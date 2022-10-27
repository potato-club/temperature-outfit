import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { CustomButton } from 'components/common';
import { clothesSubCategory } from 'constants/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryFilter } from 'recoil/atom/filtering';

export const CategoryBox = () => {
  const setCategory = useSetRecoilState(categoryFilter);
  const category = useRecoilValue(categoryFilter);

  return (
    <Container>
      {clothesSubCategory[category] &&
        clothesSubCategory[category].map((item, index) => (
          <CustomButton
            type="button"
            onClick={() => {
              setCategory(item.id);
            }}
            customType="white"
            text={item.name}
            key={index}
          />
        ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
