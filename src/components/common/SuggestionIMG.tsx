import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import { MoveToBtn } from './MoveToBtn';

interface Props {
  width: number;
  height: number;
  src: string;
  alt: string;
  rating: number;
  onClick: () => void;
}

interface IsHover {
  isHover: boolean;
}
export const SuggestionIMG: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  rating,
  onClick,
}) => {
  // 블러처리
  // hover시에 다른 컴포넌트
  const [isHover, setIsHover] = useState(false);
  return (
    <ImageWrapper>
      <BinWrapper>
        <StarWrapper>
          <Rating
            ratingValue={rating}
            size={20}
            transition={false}
            fillColor="#ffe714"
            emptyColor="gray"
          />
        </StarWrapper>
      </BinWrapper>
      <Wrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <GrayWrapper isHover={isHover} />
        <Image
          width={width}
          height={height}
          src={src}
          alt={alt}
          objectFit="fill"
        />
        <MoveBtn onClick={onClick} isHover={isHover}>
          이동하기
        </MoveBtn>
      </Wrapper>
    </ImageWrapper>
  );
};

const riseup = keyframes`
0%{
transform: translate(0,0);
}
100%{
  transform: translate(0, -28px);
}`;
const risedown = keyframes`
0%{
transform: translate(0,-28px);
}
100%{
  transform: translate(0, 0);
}`;
const changeBtn = keyframes`
  0%{
    background-color:#fffa;
    color:#222;
  }
  100%{
    background-color:#222a;
    color:#fff;
  }`;
const ImageWrapper = styled.section`
  position: relative;
  height: 320px;
`;
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 5px 0px #aaa;
  animation: ${risedown} 0.4s ease;
  &:hover {
    animation: ${riseup} 0.4s ease;
    transform: translateY(-28px);
  }
`;
const BinWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0px #aaa;
  border-radius: 8px;
`;

const GrayWrapper = styled.article<IsHover>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #aaa6;
  border-radius: 8px;
  z-index: ${(props) => (props.isHover ? 1 : 0)};
`;
const StarWrapper = styled.div`
  bottom: 0px;
  left: 8px;
  position: absolute;
  pointer-events: none;
`;

const MoveBtn = styled.button<IsHover>`
  display: flex;
  position: absolute;
  position: absolute;
  color: #222;
  top: 55%;
  left: 50%;
  background-color: #fffa;
  padding: 10px 16px;
  border-radius: 20px;
  border: none;
  transform: translate(-50%, -50%);
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-weight: bold;
  border: 2px solid #555;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 1px 0px #444;
  cursor: pointer;
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  z-index: ${(props) => (props.isHover ? 2 : 0)};
  &:hover,
  &:active {
    background-color: #222a;
    color: #fff;
    animation: ${changeBtn} 0.3s ease;
  }
  &:active {
    box-shadow: none;
    transform: translate(calc(-50% + 1px), calc(-50% + 2px));
  }
`;
