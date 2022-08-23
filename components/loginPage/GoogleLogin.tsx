import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import googleLogo from 'assets/img/googleNormal.png';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { userState, locations } from 'recoil/atom/';
import { useSetRecoilState } from 'recoil';
import { userApi } from 'api';
import { useRouter } from 'next/router';

export const GoogleLogin: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const setUserInfo = useSetRecoilState(userState);
  const setAllLocations = useSetRecoilState(locations);

  const handleAllLocation = useCallback(async () => {
    try {
      const { data } = await userApi.getAllLocations();
      setAllLocations(data);
    } catch (error) {
      console.log(error);
    }
  }, [setAllLocations]);

  const handleUserData = useCallback(
    async (session: any) => {
      try {
        const { data: location } = await userApi.getUserLocation();
        let userName: string = session.user!.name ?? '유저이름';
        setUserInfo({ name: userName, locationId: location.id });
      } catch (error) {
        console.log(error);
      }
    },
    [setUserInfo],
  );

  useEffect(() => {
    handleAllLocation();
    session && handleUserData(session);
  }, [session, handleUserData, handleAllLocation]);

  const onClick = () => {
    signIn('google');
  };

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <Button>
      <Img onClick={onClick}>
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
