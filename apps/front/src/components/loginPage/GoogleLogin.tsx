import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { userState, locations } from 'recoil/atom';
import { useSetRecoilState } from 'recoil';
import { userApi } from 'api';
import { useRouter } from 'next/router';
import { useQueries, useQuery } from 'react-query';
import { errorModal } from 'utils/interactionModal';
import { tokenHelper } from 'utils/tokenHelper';
// import { ProfileResponse } from 'libs/core/src/lib/types';
// import { ProfileResponse } from 'libs/core/src/index';
import { ProfileResponse } from '../../../../../libs/core/src/lib/types';
import { AxiosResponse } from 'axios';

export const GoogleLogin: React.FC = () => {
  const router = useRouter();
  const setUserInfo = useSetRecoilState(userState);
  const setAllLocations = useSetRecoilState(locations);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    router.query.token && tokenHelper.setTokenId(router.query.token);

    if (!!tokenHelper.getTokenId()) {
      setToggle(true);
      router.push('/main');
    }
  }, [router.query.token, !!tokenHelper.getTokenId()]);

  useQueries([
    {
      enabled: toggle,
      queryKey: 'getUserProfile',
      queryFn: () => userApi.getUserProfile(),
      onSuccess: ({
        data: {
          name,
          location: { id },
        },
      }: AxiosResponse<ProfileResponse>) => {
        setUserInfo({
          name: name ?? '사용자 이름',
          locationId: id,
        });
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
    {
      enabled: toggle,
      queryKey: 'getAllLocations',
      queryFn: () => userApi.getAllLocations(),
      // Todo : 전체지역 관련 type은 response는 없는 것 같음
      onSuccess: ({ data }: any) => {
        setAllLocations(data);
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  ]);
  return (
    <Button
      onClick={() => {
        userApi.login();
      }}>
      <Image
        src={'/googleNormal.png'}
        width="228"
        height="60"
        alt="구글 로고"
      />
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  width: 240px;
`;
