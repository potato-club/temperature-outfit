import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import googleLogo from 'assets/img/googleNormal.png';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { userState, locations } from 'recoil/atom/';
import { useSetRecoilState } from 'recoil';
import { userApi } from 'api';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const GoogleLogin: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const setUserInfo = useSetRecoilState(userState);
  const setAllLocations = useSetRecoilState(locations);

  useQuery('getAllLocations', userApi.getAllLocations, {
    onSuccess: ({ data }) => {
      setAllLocations(data);
    },
  });

  useQuery('getUserInfo', userApi.getUserLocation, {
    enabled: !!session,
    onSuccess: ({ data }) => {
      setUserInfo({
        name: session!.user!.name ?? '사용자 이름',
        locationId: data.id,
      });
      router.push('/');
    },
  });

  return (
    <Button>
      <Img onClick={() => signIn('google')}>
        <Image src={googleLogo} alt="구글 로고" />
      </Img>
    </Button>
  );
};

const Img = styled.section`
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;
