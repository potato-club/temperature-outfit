import { FindAllProductQuery } from '@temperature-outfit/core';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  categoryFilter,
  colorFilter,
  nameFilter,
  pageFilter,
} from 'recoil/atom/filtering';

export default function useFilter(num: number) {
  const [filter, setFilter] = useState<FindAllProductQuery>({
    query: '',
    categoryId: '',
    limit: num,
    color: '',
    page: 1,
  });

  const query = useRecoilValue(nameFilter);
  const categoryId = useRecoilValue(categoryFilter);
  const color = useRecoilValue(colorFilter);
  const [page, setPage] = useRecoilState(pageFilter);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, page }));
  }, [page]);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, color, page: 1 }))
  }, [color])

  useEffect(() => {
    categoryId === 'all'
      ? setFilter((prev) => ({ ...prev, categoryId: '', page: 1 }))
      : setFilter((prev) => ({ ...prev, categoryId, page: 1 }));
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, query, page: 1 }));
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { filter, setFilter };
}
