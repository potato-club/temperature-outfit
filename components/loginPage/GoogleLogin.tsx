import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import googleLogo from 'assets/img/googleNormal.png';

export const GoogleLogin: React.FC = () => {
  const onClick = () => {
    console.log('1');
  };

  return (
    <Button>
      <Img onClick={onClick}>
        <Image src={googleLogo} alt="구글 로고" />
      </Img>
    </Button>
  );
};

const Img = styled.div`
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
`;
