import { useState } from 'react';
import { productApi } from '../api/productApi';
import { useSetRecoilState } from 'recoil';
import { lastPage } from 'recoil/atom/filtering';
import { useQuery } from 'react-query';
import { errorModal } from 'utils/interactionModal';
import { FindAllProductQuery, ProductOneResponse } from '@temperature-outfit/core';

export function useGetItem(filter: FindAllProductQuery) {
  const [filterItem, setFilterItem] = useState<Array<ProductOneResponse>>([]);
  const setLastPage = useSetRecoilState(lastPage);

  useQuery(['getItem', filter], () => productApi.getFilter(filter), {
    onSuccess: ({ data }) => {
      setFilterItem(data.products);
      setLastPage(data.lastPage);
    },
    onError: (err: unknown) => {
      errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
    },
  });

  return {
    filterItem,
    // getItem: useGetProduct,
  };
}
