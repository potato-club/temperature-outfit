import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
type Props = {
  id: string;
  deleteImage: (id: string) => void;
};
const RemoveButton = ({ id, deleteImage }: Props) => {
  const [showRemove, setShowRemove] = useState<boolean>(false);
  return (
    <Wrapper
      onClick={() => deleteImage(id)}
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

const MemoFix = React.memo(FiX);

export const MemoRemoveButton = React.memo(RemoveButton);
