import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { filterType } from 'api/productApi';
import { productType } from 'types/editPage/product.type';

export default function useGetFilter(filter: filterType) {
  const [data, setData] = useState<Array<productType>>([]);

  const getFilter = useCallback(async (filter: filterType) => {
    try {
      const { data } = await productApi.getFilter({ params: filter });
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getFilter(filter);
  }, [filter, getFilter])

  return {
    data,
  };
}
