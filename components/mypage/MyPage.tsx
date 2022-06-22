import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy, SelectBox } from 'components/common';
import { customColor, city, clothesCategory } from 'constants/index';
import { GrLocation } from 'react-icons/Gr';

export const MyPage: React.FC = () => {
  return (
    <Container>
      <NameInfo>
        <TypoGraphy type="h2" color={customColor.brandColor3} fontWeight="bold">
          아이유
        </TypoGraphy>
        <TypoGraphy type="h4" color={customColor.brandColor4} fontWeight="bold">
          님
        </TypoGraphy>
      </NameInfo>

      <LocationWrapper>
        <GrLocation size={28} />
        <SelectBox width={80} propsArray={city} label="지역" />
      </LocationWrapper>

      <TypoGraphy type="sm1">사는 지역을 선택해주세요</TypoGraphy>

      <Footer>
        <LogOut>
          <TypoGraphy
            type="body1"
            color={customColor.brandColor5}
            fontWeight="bold">
            로그아웃
          </TypoGraphy>{' '}
        </LogOut>
        <AccountDeletion>
          <TypoGraphy
            type="body1"
            color={customColor.brandColor5}
            fontWeight="bold">
            회원탈퇴
          </TypoGraphy>
        </AccountDeletion>
      </Footer>
    </Container>
  );
};

const Container = styled.section`
  width: 176px;
  height: 154px;
  border: 2px solid ${customColor.gray};
  border-radius: 0 0 28px 28px;
  background-color: ${customColor.white};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NameInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;
const LocationWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Footer = styled.section`
  display: flex;
  gap: 8px;
  justify-content: space-evenly;
`;

const LogOut = styled.section`
  cursor: pointer;
`;

const AccountDeletion = styled.section`
  cursor: pointer;
`;
