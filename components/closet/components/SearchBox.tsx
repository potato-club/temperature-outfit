import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';
export const SearchBox: React.FC = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="검색" />
      <AiOutlineSearch className="ImgSearch" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .ImgSearch {
    position: absolute;
    top: 15px;
    left: 4px;
  }
`;

const SearchInput = styled.input`
  border: 1px solid gray;
  border-radius: 8px;
  height: 36px;
  text-align: center;

  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
