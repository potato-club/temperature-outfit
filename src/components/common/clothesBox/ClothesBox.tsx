import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { MemoClothesImg } from './ClothesImg';
import { MemoTypoGraphy } from 'components/common/TypoGraphy';
import { MemoRemoveButton } from '../dressBox/components/RemoveButton';

type Props = {
  url: string;
  name: string;
  id?: string;
  deleteFn?: (id: string) => void;
};

export function ClothesBox({ url, name, id, deleteFn }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);

  return (
    <Container>
      <ImgWrapper
        onMouseOver={() => {
          setShowName(true);
          setShowRemove(true);
        }}
        onMouseOut={() => {
          setShowName(false);
          setShowRemove(false);
        }}>
        <MemoClothesImg url={url} />
        <ClothesName showName={showName}>
          <MemoTypoGraphy type="sm1" color={customColor.white}>
            {name}
          </MemoTypoGraphy>
        </ClothesName>
        {deleteFn && id !== undefined && showRemove && (
          <MemoRemoveButton
            id={id}
            deleteFn={deleteFn}
            showRemove={showRemove}
          />
        )}
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const ImgWrapper = styled.section`
  display: flex;
  position: relative;
  margin: 0;
  border: 1px solid ${customColor.grayLight};
  border-radius: 8px;
  overflow: hidden;
  width: 136px;
  height: 136px;
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
  background-color: ${customColor.black + '99'};
  border-radius: 6px;
  padding: 2px 6px;
  top: 0px;
  left: 0px;
  opacity: ${({ showName }) => (showName ? 1 : 0)};
  z-index: 1;
`;
