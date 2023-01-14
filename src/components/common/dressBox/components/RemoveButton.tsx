import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
type Props = {
  id: string;
  deleteFn: (id: string) => void;
  showRemove: boolean;
};

const RemoveButton = ({ id, deleteFn, showRemove }: Props) => {
  return (
    <Wrapper onClick={() => deleteFn(id)} showRemove={showRemove} type="button">
      <MemoGiCancel fontSize={'18px'} color={'#ff4949'} />
    </Wrapper>
  );
};

type StyledProps = {
  showRemove: boolean;
};
const Wrapper = styled.button<StyledProps>`
  display: flex;
  position: absolute;
  z-index: 99;
  top: 4px;
  right: 4px;
  border-radius: 10px;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: none;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  outline: none;
  opacity: ${({ showRemove }) => (showRemove ? 0.8 : 0)};
  &:hover,
  &:active {
    opacity: 1;
  }
`;

const MemoGiCancel = React.memo(GiCancel);

export const MemoRemoveButton = React.memo(RemoveButton);
