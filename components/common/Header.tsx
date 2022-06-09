import React, { useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './index';
import { MyPage } from 'components/mypage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoFileTrayStackedSharp } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

export const Header: React.FC = () => {
  const [myPageToggle, setMyPageToggle] = useState(false);

  const onClick = () => {
    setMyPageToggle((current) => !current);
  };
  return (
    <Wrapper>
      <Div>
        <TypoGraphy color={customColor.white}>
          Write down today&apos;s outfit.
        </TypoGraphy>
        <ButtonBox>
          <Logo>
            <FaRegCalendarAlt size="20px" />
          </Logo>
          <Logo>
            <IoFileTrayStackedSharp size="20px" />
          </Logo>
          <Logo className="benchMark">
            <CgProfile size="20px" onClick={onClick} />
          </Logo>
          <MyPageDiv> {myPageToggle ? <MyPage /> : null}</MyPageDiv>
        </ButtonBox>
      </Div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${customColor.brandColor5};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 1178px;
  height: 46px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
`;
const Logo = styled.div`
  cursor: pointer;
  color: ${customColor.white};
`;

const MyPageDiv = styled.div`
  position: absolute;
  left: 75%;
  top: 34px;
`;
