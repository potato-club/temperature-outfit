import { useState, useEffect } from 'react';
import { filterType } from 'types/editPage/filter.type';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  categoryFilter,
  colorFilter,
  nameFilter,
  pageFilter,
} from 'recoil/atom/filtering';

export default function useFilter(num: number) {
  const [filter, setFilter] = useState<filterType>({
    query: '',
    categoryId: '',
    limit: num,
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
    if (color) {
      setFilter((prev) => ({ ...prev, color, page: 1 }));
      setPage(1);
    } else {
      setFilter((prev) => {
        const { color, ...rest } = prev; // Todo 현재 color 필터값에 '' 값이 들어가면 서버측에서 '' 를 색상으로 인식하는걸로 보임 -> 회의해보고 수정이 가능하면 이 코드 수정해야함
        return rest;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

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

  // 확인용 코드
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return { filter, setFilter };
}
