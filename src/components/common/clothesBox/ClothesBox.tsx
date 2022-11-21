import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { MemoClothesImg } from './ClothesImg';
import { MemoRemoveButton } from './components/RemoveButton';
import { MemoTypoGraphy } from "components/common/TypoGraphy";

type Props = {
  url: string;
  name: string;
  type: 'edit' | 'closet';
  id?: string;
  deleteFn?: (id: string) => void;
};

export function ClothesBox({ url, name, id, deleteFn, type }: Props) {
  const [showName, setShowName] = useState<boolean>(false);

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
      {deleteFn && id !== undefined && (
        <MemoRemoveButton id={id} deleteFn={deleteFn} />
      )}
    </Container>
  );
}

type StyleProps = {
  type: 'edit' | 'closet';
};

const Container = styled.section<StyleProps>`
  display: flex;
  position: ${({ type }) => type === 'closet' && 'relative'};
  margin: 0;
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  width: 120px;
  height: ${({ type }) => (type === 'edit' ? '80px' : '120px')};
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
