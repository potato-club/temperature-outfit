import { useState } from 'react';
import { productApi } from '../api/productApi';
import { productType } from 'types/editPage/product.type';
import { filterType } from 'types/editPage/filter.type';
import { useSetRecoilState } from 'recoil';
import { lastPage } from 'recoil/atom/filtering';
import { useQuery } from 'react-query';

export default function useGetItem(filter:filterType) {
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
  
  
    useQuery(['getItem', filter], () => productApi.getFilter({params : filter}), {
      onSuccess: ({ data }) => {
        setFilterItem(data.products);
        setLastPage(data.lastPage);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  

  return {
    filterItem,
    // getItem: useGetProduct,
  };
}
