import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { TypoGraphy } from 'components/common';
import { FiX } from 'react-icons/fi';
import { MemoClothesImg } from './ClothesImg';
import { MemoTypoGraphy } from './TypoGraphyTest';

type Props = {
  url: string;
  name: string;
  type : 'edit' | 'closet';
  id?: string;
  deleteImage?: (id: string) => void;
};

export function ClothesBox({ url, name, id, deleteImage, type }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);

  return (
    <Container
      type={type}
      onMouseOver={() => setShowName(true)}
      onMouseOut={() => setShowName(false)}>
      <MemoClothesImg type={type} url={url} />
      <ClothesName showName={showName}>
        <MemoTypoGraphy type="sm1" color={customColor.white}>
          {name}
        </MemoTypoGraphy>
      </ClothesName>
      {deleteImage && id !== undefined && (
        <RemoveWrapper
          onClick={() => deleteImage(id)}
          showRemove={showRemove}
          onMouseOver={() => setShowRemove(true)}
          onMouseOut={() => setShowRemove(false)}>
          <FiX />
        </RemoveWrapper>
      )}
    </Container>
  );
}

type StyleProps = {
  type: 'edit' | 'closet';
};

const Container = styled.section<StyleProps>`
  display: flex;
  position : ${({type}) => type === 'closet' && 'relative'};
  margin: 0;
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  width: 120px;
  height: ${({type}) => type === 'edit' ? '80px' : '120px'};
  /* background: linear-gradient(180deg, #292929 0%, rgba(196, 196, 196, 0) 100%); */
`;
type NameProps = {
  showName: boolean;
};
const ClothesName = styled.section<NameProps>`
  position: absolute;
  background-color: #00000080;
  border-radius: 4px;
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
  z-index: 99;
  top: 0px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid ${customColor.gray};
  background-color: pink;
  outline: none;
  opacity: ${({ showRemove }) => (showRemove ? 1 : 0)};
  z-index: 0;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;
