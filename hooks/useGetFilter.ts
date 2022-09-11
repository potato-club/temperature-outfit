import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { productType } from 'types/editPage/product.type';
import { filterType } from 'types/editPage/filter.type';

export default function useGetFilter() {
  const [filterItem, setFilterItem] = useState<Array<productType>>([]);
  const [maxPage, setMaxPage] = useState<number>(1);

  const getFilter = async (filter: filterType) => {
    try {
      const { data } = await productApi.getFilter({ params: filter });
      setFilterItem(data.products);
      setMaxPage(data.maxPage);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    filterItem,
    getFilter,
    maxPage,
  };
}
