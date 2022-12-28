import { MenuItem, Select } from '@mui/material';
import styled from '@emotion/styled';
import { clothesSubCategory } from 'constants/index';
import React, { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { categoryFilter } from 'recoil/atom/filtering';
import { CategoryDetail } from 'types/common/categoryDetail.type';

type Props = {
  mainCategory: string;
};
export const SubSelectBox = ({ mainCategory }: Props) => {
  const [category, setCategory] = useRecoilState(categoryFilter);

  const mainId = useMemo(
    () => clothesSubCategory[mainCategory].map((data) => data.id),
    [mainCategory],
  );

  useEffect(() => {
    setCategory(mainId[0]);
  }, [setCategory, mainId]);

  // 확인용 코드
  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <CustomSelect
      value={mainId.includes(category) ? category : ''}
      onChange={(e) => setCategory(e.target.value as string)}>
      {clothesSubCategory[mainCategory].map((data: CategoryDetail) => (
        <CustomMenuItem value={data.id} key={data.id}>
          {data.name}
        </CustomMenuItem>
      ))}
    </CustomSelect>
  );
};
const CustomSelect = styled(Select)`
  width: 108px;
  height: 48px;
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
