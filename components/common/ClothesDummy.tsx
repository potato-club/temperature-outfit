import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { TypoGraphy } from 'components/common';
import { FiX } from 'react-icons/fi';

type Props = {
  width?: number;
  height?: number;
  marginLR?: number;
};

// Todo 더미데이터 만들면 props 에서 데이터들을 받아서 출력하는 형식으로 바꿔야함.
export function ClothesDummy({ width, height, marginLR }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);

  const onRemove = () => {
    alert('삭제버튼 클릭');
  };
  return (
    <Container
      marginLR={marginLR}
      width={width}
      height={height}
      onMouseOver={() => setShowName(true)}
      onMouseOut={() => setShowName(false)}>
      <Image
        width={width || 120}
        height={height || 80}
        alt="clothes"
        src="/clothes/clothes1.jpg"
      />
      <ClothesName showName={showName}>
        <TypoGraphy type="sm1" color={customColor.brandColor2}>
          LMC 고래반팔
        </TypoGraphy>
      </ClothesName>
      <RemoveWrapper
        onClick={() => onRemove()}
        showRemove={showRemove}
        onMouseOver={() => setShowRemove(true)}
        onMouseOut={() => setShowRemove(false)}>
        <FiX />
      </RemoveWrapper>
    </Container>
  );
}

type StyleProps = {
  marginLR?: number;
  width?: number;
  height?: number;
};

const Container = styled.section<StyleProps>`
  display: flex;
  margin: ${(props) => props.marginLR && `0 ${props.marginLR}px`};
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  max-width: ${({ width }) => (width ? width + 'px' : '120px')};
  max-height: ${({ height }) => (height ? height + 'px' : '80px')};
  min-width: ${({ width }) => (width ? width + 'px' : '120px')};
  min-height: ${({ height }) => (height ? height + 'px' : '80px')};
  /* background: linear-gradient(180deg, #292929 0%, rgba(196, 196, 196, 0) 100%); */
`;
type NameProps = {
  showName: boolean;
};
const ClothesName = styled.section<NameProps>`
  position: absolute;
  top: 4px;
  left: 8px;
  opacity: ${({ showName }) => (showName ? 1 : 0)};
`;

type RemoveProps = {
  showRemove: boolean;
};
const RemoveWrapper = styled.button<RemoveProps>`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid ${customColor.gray};
  background-color: pink;
  outline: none;
  opacity: ${({ showRemove }) => (showRemove ? 1 : 0)};
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;
