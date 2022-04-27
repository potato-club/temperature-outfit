import React from 'react';
import styled from '@emotion/styled';
import { AiFillStar } from 'react-icons/Ai';
import { color } from 'constants/color';

export const StarPrefer: React.FC = () => {
  // 커스텀 컬러만 사용할 것
  //
  return (
    <StarContainer>
      <AiFillStar color="yellow" size={36} />
      <AiFillStar color="yellow" size={36} />
      <AiFillStar color="yellow" size={36} />
      <AiFillStar color="yellow" size={36} />
      <AiFillStar color="yellow" size={36} />
    </StarContainer>
  );
};

const StarContainer = styled.div`
  display: flex;
  width: 240px;
  height: 40px;
  background-color: ${color.brandColor5};
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin: 16px;
`;
