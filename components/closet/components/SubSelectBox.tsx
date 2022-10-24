import { MenuItem, Select } from '@mui/material';
import { clothesSubCategory } from 'constants/index';
import React, { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { categoryFilter } from 'recoil/atom/filtering';
import { CategoryDetail } from 'types/temp/categoryDetail.type';

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
    <Select
      value={mainId.includes(category) ? category : ''}
      onChange={(e) => setCategory(e.target.value)}>
      {clothesSubCategory[mainCategory].map((data: CategoryDetail) => (
        <MenuItem value={data.id} key={data.id}>
          {data.name}
        </MenuItem>
      ))}
    </Select>
  );
};
