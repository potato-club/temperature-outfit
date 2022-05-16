import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';
import { MdStar, MdStarHalf } from 'react-icons/Md';

export const StarRate: React.FC = () => {
  const satisfaction = 3;

  const calStar = () => {
    const starArr = [];
    const full = Math.floor(satisfaction / 2);
    const half = satisfaction % 2;

    for (let i = 0; i < full; i++) {
      starArr.push(<FullStar />);
    }
    {
      half && starArr.push(<HalfStar />);
    }
    return starArr;
  };
  return <Wrapper>{calStar()}</Wrapper>;
};
const Wrapper = styled.div`
  background-color: ${color.brandColor4};
  border-radius: 12px;
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullStar = styled(MdStar)`
  width: 36px;
  height: 36px;
  color: #ffd43a;
`;

const HalfStar = styled(MdStarHalf)`
  width: 36px;
  height: 36px;
  color: #ffd43a;
`;
