import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
type Props = {
  id: string;
  deleteFn: (id: string) => void;
};
const RemoveButton = ({ id, deleteFn }: Props) => {
  const [showRemove, setShowRemove] = useState<boolean>(false);
  return (
    <Wrapper
      onClick={() => deleteFn(id)}
      showRemove={showRemove}
      onMouseOver={() => setShowRemove(true)}
      onMouseOut={() => setShowRemove(false)}>
      <MemoFix />
    </Wrapper>
  );
};

type StyledProps = {
  showRemove: boolean;
};
const Wrapper = styled.button<StyledProps>`
  cursor: pointer;
  position: absolute;
  top: -2px;
  right: -4px;
  width: 18px;
  height: 18px;
  padding: 0px;
  outline: none;
  border: none;
  font-size: 16px;
  background-color: transparent;
  color: red;
  opacity: ${({ showRemove }) => (showRemove ? 1 : 0)};
  z-index: 0;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;

const MemoFix = React.memo(FiX);

export const MemoRemoveButton = React.memo(RemoveButton);
