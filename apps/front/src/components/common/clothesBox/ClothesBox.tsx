import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { RemoveButton } from '../dressBox/components/RemoveButton';
import imageLayout from 'constants/imageLayout';
import { TypoGraphy } from "components/common";
import { ClothesImg } from './ClothesImg';

type Props = {
  url?: string;
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
        <ClothesImg url={url} />
        <ClothesName showName={showName}>
          <TypoGraphy type="sm1" color={customColor.white}>
            {name}
          </TypoGraphy>
        </ClothesName>
        {deleteFn && id !== undefined && showRemove && (
          <RemoveButton
            id={id}
            deleteFn={deleteFn}
            showRemove={showRemove}
          />
        )}
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  width: ${imageLayout.square}px;
  height: ${imageLayout.square}px;
`;

const ImgWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0;
  border: 1px solid ${customColor.grayLight};
  border-radius: 8px;
  overflow: hidden;
  width: ${imageLayout.square}px;
  height: ${imageLayout.square}px;
  &:hover {
    border: 1px solid ${customColor.brandColor1};
  }
`;

type NameProps = {
  showName: boolean;
};

const ClothesName = styled.div<NameProps>`
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
