import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { MemoClothesImg } from './ClothesImg';
import { MemoRemoveButton } from './components/RemoveButton';
import { MemoTypoGraphy } from 'components/common/TypoGraphy';

type Props = {
  url: string;
  name: string;
  id?: string;
  deleteFn?: (id: string) => void;
};

export function ClothesBox({ url, name, id, deleteFn }: Props) {
  const [showName, setShowName] = useState<boolean>(false);

  return (
    <Container>
      <ClothesName showName={showName}>
        <MemoTypoGraphy type="sm1" color={customColor.white}>
          {name}
        </MemoTypoGraphy>
      </ClothesName>
      <ImgWrapper
        onMouseOver={() => setShowName(true)}
        onMouseOut={() => setShowName(false)}>
        <MemoClothesImg url={url} />
      </ImgWrapper>
      {deleteFn && id !== undefined && (
        <MemoRemoveButton id={id} deleteFn={deleteFn} />
      )}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const ImgWrapper = styled.section`
  display: flex;
  margin: 0;
  border: 1px solid ${customColor.gray};
  border-radius: 16px;
  overflow: hidden;
  width: 126px;
  height: 200px;

  &:hover {
    border: 1px solid ${customColor.brandColor1};
  }
`;

type NameProps = {
  showName: boolean;
};

const ClothesName = styled.section<NameProps>`
  user-select: none;
  position: absolute;
  background-color: #00000080;
  border-radius: 4px;
  padding: 4px;
  top: 0px;
  left: 0px;
  opacity: ${({ showName }) => (showName ? 1 : 0)};
  z-index: 1;
`;
