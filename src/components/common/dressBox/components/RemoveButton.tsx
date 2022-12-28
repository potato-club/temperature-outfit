import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
type Props = {
  id: string;
  deleteFn: (id: string) => void;
  showRemove: boolean;
};
const RemoveButton = ({ id, deleteFn, showRemove }: Props) => {
  return (
    <Wrapper onClick={() => deleteFn(id)} showRemove={showRemove}>
      <MemoFix fontSize={'20px'} color={'#eee'} />
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
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #c70000;
  box-shadow: 1px 1px 2px 0px #aaa;
  cursor: pointer;
  outline: none;
  opacity: ${({ showRemove }) => (showRemove ? 0.8 : 0)};
  z-index: 0;
  padding: 3px;
  margin: 0;
  &:hover,
  &:active {
    opacity: 1;
  }
`;

const MemoFix = React.memo(FiX);

export const MemoRemoveButton = React.memo(RemoveButton);
