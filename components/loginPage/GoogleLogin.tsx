import React from 'react';
import styled from '@emotion/styled';

export const GoogleLogin: React.FC = () => {
  const onClick = () => {
    console.log('1');
  };

  return (
    <>
      <Button
        src="btn_google_signin_light_normal_web@2x.png"
        onClick={onClick}
      />
    </>
  );
};

const Button = styled.img`
  cursor: pointer;
`;
