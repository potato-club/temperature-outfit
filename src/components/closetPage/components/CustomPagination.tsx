import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React from 'react';
import Pagination from 'react-js-pagination';
import { useRecoilState, useRecoilValue } from 'recoil';
import { lastPage, pageFilter } from 'recoil/atom/filtering';
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronRight,
  HiChevronLeft,
} from 'react-icons/hi';

export function CustomPagination() {
  const [page, setPage] = useRecoilState(pageFilter);
  const last = useRecoilValue(lastPage);
  const countPerPage = 20;

  return (
    <PaginationWrapper>
      <Pagination
        activePage={page}
        totalItemsCount={countPerPage * last}
        itemsCountPerPage={countPerPage} // 몇개 보여줄건지
        onChange={(e) => setPage(e)}
        prevPageText={
          <PaginationIcon>
            <HiChevronLeft fontSize={'22px'} />
          </PaginationIcon>
        }
        nextPageText={
          <PaginationIcon>
            <HiChevronRight fontSize={'22px'} />
          </PaginationIcon>
        }
        firstPageText={
          <PaginationIcon>
            <HiChevronDoubleLeft />
          </PaginationIcon>
        }
        lastPageText={
          <PaginationIcon>
            <HiChevronDoubleRight />
          </PaginationIcon>
        }
        pageRangeDisplayed={1}
      />
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.section`
  .pagination {
    display: flex;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 18px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    width: 28px;
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
    color: ${customColor.brandColor1};
  }
`;
const PaginationIcon = styled.div`
  color: #888;
  font-size: 20px;
  &:hover {
    color: #000;
  }
`;
