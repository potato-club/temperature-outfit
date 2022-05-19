import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';
export const SearchBox: React.FC = () => {
  return (
    <Wrapper>
      <AiOutlineSearch />
      <SearchInput placeholder="검색" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid gray;
`;

const SearchInput = styled.input`
  border: none;
`;
