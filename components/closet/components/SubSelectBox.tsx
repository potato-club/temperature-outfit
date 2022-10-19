import { preventContextMenu } from '@fullcalendar/common';
import { MenuItem, Select } from '@mui/material';
import { CategoryDetail, clothesSubCategory } from 'constants/index';
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { filtering } from 'recoil/atom/filtering';

type Props = {
  mainCategory: string;
};
export const SubSelectBox = ({ mainCategory }: Props) => {
  const [filter, setFilter] = useRecoilState(filtering);

  const mainId = useMemo(() => (
    clothesSubCategory[mainCategory].map((data) => data.id)
  ), [mainCategory])

  useEffect(() => {
    setFilter(prev => ({...prev, categoryId: mainId[0]}))
  }, [setFilter, mainId])


  // 확인용 코드
  useEffect(() => {
    console.log(filter);
  }, [filter])

  return (
    <Select
      value={mainId.includes(filter.categoryId!) ? filter.categoryId : ''}
      onChange={(e) => setFilter(prev => ({...prev, categoryId: e.target.value}))}>
      {clothesSubCategory[mainCategory].map((data: CategoryDetail) => (
        <MenuItem value={data.id} key={data.id}>
          {data.name}
        </MenuItem>
      ))}
    </Select>
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
