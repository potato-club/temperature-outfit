import { useState } from 'react';
import { productApi } from '../api/productApi';
import { productType } from 'types/editPage/product.type';
import { filterType } from 'types/editPage/filter.type';
import { useSetRecoilState } from 'recoil';
import { lastPage } from 'recoil/atom/filtering';
import { useQuery } from 'react-query';
import { errorModal } from 'utils/interactionModal';

export default function useGetItem(filter: filterType) {
  const [filterItem, setFilterItem] = useState<Array<productType>>([]);
  const setLastPage = useSetRecoilState(lastPage);

  // const getItem = async (filter: filterType) => {
  //   try {
  //     const { data } = await productApi.getFilter({ params: filter });
  //     setFilterItem(data.products);
  //     setLastPage(data.lastPage);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const useGetProduct = (filter: filterType) => {
  //   return useQuery(['getItem', filter], () => productApi.getFilter({ prams: filter }), {
  //     onSuccess: ({ data }) => {
  //       setFilterItem(data.products);
  //       setLastPage(data.lastPage);
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  useQuery(
    ['getItem', filter],
    () => productApi.getFilter({ params: filter }),
    {
      onSuccess: ({ data }) => {
        setFilterItem(data.products);
        setLastPage(data.lastPage);
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  return {
    filterItem,
    // getItem: useGetProduct,
  };
}
