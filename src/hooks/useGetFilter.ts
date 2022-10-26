import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { productType } from 'types/editPage/product.type';
import { filterType } from 'types/editPage/filter.type';
import { useSetRecoilState } from "recoil";
import { lastPage } from 'recoil/atom/filtering';

export default function useGetFilter() {
  const [filterItem, setFilterItem] = useState<Array<productType>>([]);
  const setLastPage = useSetRecoilState(lastPage);

  const getFilter = async (filter: filterType) => {
    try {
      const { data } = await productApi.getFilter({ params: filter });
      setFilterItem(data.products);
      setLastPage(data.lastPage);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    filterItem,
    getFilter,
  };
}
