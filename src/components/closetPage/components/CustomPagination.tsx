import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React from 'react';
import Pagination from 'react-js-pagination';
import { useRecoilState, useRecoilValue } from "recoil";
import { lastPage, pageFilter } from 'recoil/atom/filtering';

export function CustomPagination() {
  const [page, setPage] = useRecoilState(pageFilter);
  const last = useRecoilValue(lastPage);
  const countPerPage = 20;

  return (
    <PaginationWrapper>
      <Pagination
        activePage={page}
        totalItemsCount={countPerPage * last} // Todo: 마지막페이지 가져와야함 (임시로 20페이지로 설정)
        itemsCountPerPage={countPerPage} // 몇개 보여줄건지
        onChange={(e) => setPage(e)}
        prevPageText="<"
        nextPageText=">"
        firstPageText="<<"
        lastPageText=">>"
        pageRangeDisplayed={1}
      />
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.section`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${customColor.gray};
  }

  ul.pagination li:nth-of-type(-n + 2) a {
    color: ${customColor.black};
  }
  ul.pagination li:nth-last-of-type(-n + 2) a {
    color: ${customColor.black};
  }

  ul.pagination li a:hover,
  ul.pagination li.active a {
    color: ${customColor.brandColor1}
  }
`;
