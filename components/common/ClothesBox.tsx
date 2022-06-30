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
  data: string;
  id: number;
  name: string;
  deleteImage: (id:number) => void;
};

// 기존 ClothesDummy 에서 data 를 props 로 받아서 이미지를 출력하는 형식으로 바뀐거임
export function ClothesBox({ width, height, marginLR, data, id, name, deleteImage }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);

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
        src={data}
      />
      <ClothesName showName={showName}>
        <TypoGraphy type="sm1" color={customColor.white}>
          {name}
        </TypoGraphy>
      </ClothesName>
      <RemoveWrapper
        onClick={() => deleteImage(id)}
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
  background-color: #00000080;
  padding: 4px;
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
