import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { MemoDressImg } from './DressImg';
import { MemoRemoveButton } from './components/RemoveButton';
import { MemoTypoGraphy } from 'components/common/TypoGraphy';

type Props = {
  url: string;
  name: string;
  id?: string;
  deleteFn?: (id: string) => void;
};

type NameProps = {
  showName: boolean;
};
type RemoveProps = {
  showRemove: boolean;
};
export function DressBox({ url, name, id, deleteFn }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);
  return (
    <Container>
      <Wrapper
        onMouseOver={() => {
          setShowName(true);
          setShowRemove(true);
        }}
        onMouseOut={() => {
          setShowName(false);
          setShowRemove(false);
        }}>
        <MemoDressImg url={url} />
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
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 200px;
  height: 126px;
  box-shadow: 1px 1px 6px -1px #aaa;
`;
const ClothesName = styled.section<NameProps>`
  position: absolute;
  background-color: #00000080;
  border-radius: 4px;
  padding: 4px;
  top: 4px;
  left: 8px;
  opacity: ${({ showName }) => (showName ? 1 : 0)};
`;
