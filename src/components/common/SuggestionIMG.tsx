import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';

interface Props {
  width: number;
  height: number;
  src: string;
  alt: string;
  rating: number;
  onClick: () => void;
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
  return (
    <ImageWrapper>
      <Wrapper>
        <Image
          width={width}
          height={height}
          src={src}
          alt={alt}
          objectFit="fill"
        />
        <MoveBtn onClick={onClick}>이동하기</MoveBtn>
      </Wrapper>
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
  z-index: 1;
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
const StarWrapper = styled.div`
  bottom: 0px;
  left: 4px;
  position: absolute;
  pointer-events: none;
`;

const MoveBtn = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #a8dfff;
  color: white;
  /* opacity: 0; */
`;
