import React, { useState } from 'react';
import styled from '@emotion/styled';
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
            size={24}
            transition={false}
            fillColor="orange"
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
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    transform: translateY(-10%);
  }
`;
const BinWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 8, 37, 0.2);
  box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
`;

const GrayWrapper = styled.article<IsHover>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(220, 209, 209, 0.5);
  z-index: ${(props) => (props.isHover ? 1 : 0)};
`;
const StarWrapper = styled.div`
  bottom: 0px;
  left: 4px;
  position: absolute;
  pointer-events: none;
`;

const MoveBtn = styled.button<IsHover>`
  display: flex;
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff33;
  padding: 10px 16px;
  border-radius: 20px;
  border: none;
  transform: translate(-50%, -50%);
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-weight: bold;
  border: 2px solid #555;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 1px 0px #555;
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  z-index: ${(props) => (props.isHover ? 2 : 0)};
  &:hover {
    background-color: #e3adad44;
    color: #fff;
    animation-timing-function: ease;
    animation-duration: 0.4s;
  }
  &:active {
    box-shadow: none;
    transform: translate(1px, 2px);
  }
`;
