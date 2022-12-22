import React, { useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './index';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoFileTrayStackedSharp } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import { MyPage } from 'components/mypage/MyPage';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const [myPageToggle, setMyPageToggle] = useState(false);

  const onClick = () => {
    setMyPageToggle((current) => !current);
  };

  const router = useRouter();

  return (
    <Wrapper>
      {router.pathname !== '/' && (
        <Div>
          <Link href="/main" passHref>
            <Logo>
              <TypoGraphy color={customColor.brandColor3} fontWeight={'bold'}>
                Write down today&apos;s outfit.
              </TypoGraphy>
            </Logo>
          </Link>
          <ButtonBox>
            <Link href="/calendar" passHref>
              <Logo>
                <FaRegCalendarAlt size="20px" />
              </Logo>
            </Link>
            <Link href="/closet" passHref>
              <Logo>
                <IoFileTrayStackedSharp size="20px" />
              </Logo>
            </Link>
            <Logo className="benchMark">
              <CgProfile size="20px" onClick={onClick} />
            </Logo>
            <MyPageDiv> {myPageToggle ? <MyPage /> : null}</MyPageDiv>
          </ButtonBox>
        </Div>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  width: 100%;
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 99;
  box-shadow: 0px 1px 10px -4px #aaa;
`;

const Div = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 1178px;
  height: 42px;
`;

const ButtonBox = styled.section`
  display: flex;
  gap: 16px;
  position: relative;
`;
const Logo = styled.section`
  cursor: pointer;
  color: ${customColor.brandColor3};
`;

const MyPageDiv = styled.section`
  position: absolute;
  left: 75%;
  top: 34px;
`;
