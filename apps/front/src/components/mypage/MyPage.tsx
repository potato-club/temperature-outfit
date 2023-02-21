import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { useRecoilValue, useRecoilState } from 'recoil';
import { locations, userState } from 'recoil/atom';
import { userApi } from 'api';
import { LocationSelectBox, TypoGraphy } from 'components/common';
import { useMutation } from 'react-query';
import {
  completeCheckModal,
  confirmModal,
  errorModal,
} from 'utils/interactionModal';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';
import { LocationResponse } from '@temperature-outfit/core';

interface Props {
  myPageToggle: boolean;
}

export const MyPage: React.FC<Props> = ({ myPageToggle }) => {
  const [{ name, locationId }, setUser] = useRecoilState(userState);
  const allLocations = useRecoilValue(locations);
  const router = useRouter();
  const changeUserLocations = (data: number): void => {
    mutate(data);
  };

  const { mutate } = useMutation(
    (data: number) => userApi.changeUserLocation({ locationId: data }),
    {
      onSuccess: ({ data: { id } }: AxiosResponse<LocationResponse>) => {
        setUser({ name: name, locationId: id });
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  const handleLogout = useCallback(() => {
    userApi.logout();
    router.push('/');
  }, []);

  const { mutate: handleDelete } = useMutation(() => userApi.deleteAuth(), {
    onSuccess: () => {
      completeCheckModal(() => handleLogout());
    },
    onError: (err: unknown) => {
      errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
    },
  });
  const userDeleteModal = () => {
    confirmModal('계정을 삭제하시겠습니까?', handleDelete);
  };

  return (
    <Container myPageToggle={myPageToggle}>
      <InnerContainer myPageToggle={myPageToggle}>
        <NameInfo>
          <TypoGraphy
            type="body1"
            color={customColor.brandColor3}
            fontWeight="bold"
            textAlign="center">
            {name}
          </TypoGraphy>
          <TypoGraphy
            type="body2"
            color={customColor.brandColor4}
            fontWeight="bold">
            님
          </TypoGraphy>
        </NameInfo>
        <LocationWrapper>
          <LocationSelectBox
            myLocation={locationId.toString()}
            changeUserLocations={changeUserLocations}
            allLocations={allLocations}
          />
        </LocationWrapper>
        <TypoGraphy type="sm1" textAlign="center">
          사는 지역을 선택해주세요
        </TypoGraphy>
        <ButtonWrapper>
          <LogOut onClick={handleLogout}>
            <TypoGraphy
              type="body2"
              color={customColor.brandColor5}
              fontWeight="bold">
              로그아웃
            </TypoGraphy>{' '}
          </LogOut>
          <AccountDeletion onClick={userDeleteModal}>
            <TypoGraphy
              type="body2"
              color={customColor.brandColor5}
              fontWeight="bold">
              회원탈퇴
            </TypoGraphy>
          </AccountDeletion>
        </ButtonWrapper>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.section<Props>`
  min-width: 176px;
  height: ${(props) => (props.myPageToggle ? '162px' : '0px')};
  border-radius: 0 0 16px 16px;
  background-color: ${customColor.white};
  display: flex;
  flex-direction: column;
  z-index: 89;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px 0;
  padding: 16px 16px 12px;
  box-shadow: 0px 2px 5px -2px ${customColor.grayDark};
  animation: ${(props) =>
    props.myPageToggle ? 'rollDown 0.5s ease' : 'rollUp 0.5 ease'};
`;

const InnerContainer = styled.div<Props>`
  opacity: ${(props) => (props.myPageToggle ? 1 : 1)};
  animation: ${(props) =>
    props.myPageToggle ? 'fadeIn 0.8s ease' : 'fadeOut 0.8s ease'};
`;

const NameInfo = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin: 4px;
  margin-bottom: 16px;
`;

const LocationWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const ButtonWrapper = styled.section`
  opacity: inherit;
  display: flex;
  gap: 8px;
  margin: 8px 0;
  justify-content: space-evenly;
`;

const LogOut = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0 2px;
`;

const AccountDeletion = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0 2px;
`;
