import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { nameFilter } from 'recoil/atom/filtering';

export const SearchBox = () => {
  const [name, setName] = useRecoilState(nameFilter);
  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="검색"
        maxLength={20}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AiOutlineSearch className="ImgSearch" fontSize={20} />
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
    left: 12px;
  }
`;

const SearchInput = styled.input`
  width: 128px;
  height: 44px;
  border: 1px solid ${customColor.gray};
  border-radius: 12px;
  padding: 4px 10px 0 38px;
  align-items: center;
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: 13px;
  font-weight: 700;
  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
