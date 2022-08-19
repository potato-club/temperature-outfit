import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import googleLogo from 'assets/img/googleNormal.png';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { userState } from 'recoil/atom/user';
import { useSetRecoilState } from 'recoil';
import { userApi } from 'api';

export const GoogleLogin: React.FC = () => {
  const { data: session, status } = useSession();
  const setUserInfo = useSetRecoilState(userState);

  const userLocationzz = async () => {
    try {
      const { data } = await userApi.getAllLocations();
      const { data: data2 } = await userApi.getUserLocation();
      console.log(data);
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session) {
      userLocationzz();
      let userName: string = session.user!.name ?? '유저이름';
      // city도 이때 받아오기
      // 처음 값은 다 서울
      console.log(userName);
      setUserInfo({ name: userName, city: '지역id' });
    }
  }, [session, setUserInfo]);

  console.log(status); // status가 authenticated가 되면 recoil로 state 저장
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
