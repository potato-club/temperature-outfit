import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import googleLogo from 'assets/img/googleNormal.png';
import { signIn } from 'next-auth/react';

export const GoogleLogin: React.FC = () => {

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
`;
