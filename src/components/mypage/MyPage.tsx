import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { GrLocation } from 'react-icons/gr';
import { signOut } from 'next-auth/react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { locations, userState } from 'recoil/atom';
import { userApi } from 'api';
import { LocationSelectBox, TypoGraphy } from 'components/common';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { completeCheckModal, confirmModal } from 'utils/interactionModal';

export const MyPage: React.FC = () => {
  const [{ name, locationId }, setUser] = useRecoilState(userState);
  const allLocations = useRecoilValue(locations);

  const changeUserLocations = (data: number): void => {
    handleChangeLocation(data);
  };

  const { mutate: handleChangeLocation } = useMutation(
    (data: number) => userApi.changeUserLocation({ locationId: data }),
    {
      onSuccess: ({ data: { id } }) => {
        setUser({ name: name, locationId: id });
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const handleLogout = useCallback(() => {
    signOut({ callbackUrl: '/' });
  }, []);

  const router = useRouter();
  const { mutate: handleDelete } = useMutation(() => userApi.deleteAuth(), {
    onSuccess: () => {
      completeCheckModal(() => router.push('/'));
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const userDeleteModal = () => {
    confirmModal('계정을 삭제하시겠습니까?', handleDelete);
  };

  return (
    <Container>
      <NameInfo>
        <TypoGraphy type="h2" color={customColor.brandColor3} fontWeight="bold" textAlign='center'>
          {name}
        </TypoGraphy>
        <TypoGraphy type="h4" color={customColor.brandColor4} fontWeight="bold">
          님
        </TypoGraphy>
      </NameInfo>
      <LocationWrapper>
        <GrLocation size={28} />
        <LocationSelectBox
          myLocation={locationId.toString()}
          changeUserLocations={changeUserLocations}
          allLocations={allLocations}
        />
      </LocationWrapper>
      <TypoGraphy type="sm1">사는 지역을 선택해주세요</TypoGraphy>
      <Footer>
        <LogOut onClick={handleLogout}>
          <TypoGraphy
            type="body1"
            color={customColor.brandColor5}
            fontWeight="bold">
            로그아웃
          </TypoGraphy>{' '}
        </LogOut>
        <AccountDeletion onClick={userDeleteModal}>
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
  min-width: 176px;
  border: 2px solid ${customColor.gray};
  border-radius: 0 0 28px 28px;
  background-color: ${customColor.white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px 0;
  padding: 8px;
`;

const NameInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  margin: 4px;
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

const LogOut = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
`;

const AccountDeletion = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
`;
