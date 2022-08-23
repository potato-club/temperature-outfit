import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { filterType } from 'api/productApi';
import { productType } from 'types/editPage/product.type';

export default function useGetFilter() {
  const [filterItem, setFilterItem] = useState<Array<productType>>([]);

  const getFilter = async (filter: filterType) => {
    try {
      const { data } = await productApi.getFilter({ params: filter });
      console.log(data);
      setFilterItem(data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    filterItem,
    getFilter,
  };
}
