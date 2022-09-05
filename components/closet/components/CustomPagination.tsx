import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React from 'react';
import Pagination from 'react-js-pagination';
import { ReactJsPaginationProps } from 'react-js-pagination';

export function CustomPagination(props: ReactJsPaginationProps) {
  return (
    <PaginationWrapper>
      <Pagination
        {...props}
        prevPageText="<"
        nextPageText=">"
        firstPageText="<<"
        lastPageText=">>"
        pageRangeDisplayed={1} />
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

  ul.pagination li:nth-child(-n + 2) a {
    color: ${customColor.black};
  }
  ul.pagination li:nth-last-child(-n + 2) a {
    color: ${customColor.black};
  }

  ul.pagination li a:hover,
  ul.pagination li.active a {
    color: ${customColor.brandColor1}
  }
`;
