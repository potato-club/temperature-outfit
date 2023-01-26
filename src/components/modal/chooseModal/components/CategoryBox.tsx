import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { CustomButton } from 'components/common';
import { clothesSubCategory } from 'constants/index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryFilter } from 'recoil/atom/filtering';
import { categoryLabel } from 'recoil/atom/chooseModal';

export const CategoryBox = () => {
  const setCategory = useSetRecoilState(categoryFilter);
  const category = useRecoilValue(categoryLabel);

  const mainCategory = useMemo(() => {
    switch (category) {
      case '상의':
        return 'top';

      case '아우터':
        return 'outer';

      case '하의':
        return 'bottom';

      case '신발':
        return 'shoes';

      case '기타':
        return 'mainETC';

      default:
        return '없는 카테고리입니다.';
    }
  }, [category]);

  return (
    <Container>
      {clothesSubCategory[mainCategory] &&
        clothesSubCategory[mainCategory].map((item) => (
          <CustomButton
            type="button"
            onClick={() => {
              setCategory(item.id);
            }}
            customType="white"
            text={item.name}
            sidePadding={'10'}
            key={item.id}
          />
        ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
`;
