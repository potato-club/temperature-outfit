import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { chooseModal } from 'recoil/atom';
import useAddClothesEdit from 'hooks/useAddClothesEdit';
import { MemoTypoGraphy } from 'components/common/TypoGraphy';
import { MemoClothesImg } from 'components/common/clothesBox/ClothesImg';
import { productType } from 'types/editPage/product.type';

type Props = {
  url: string;
  name: string;
  id: string;
  recoil: RecoilState<productType[]>;
};

export function ModalClothesBox({ url, name, id, recoil }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const setChooseModalState = useSetRecoilState(chooseModal);
  const { addClothesEdit } = useAddClothesEdit(recoil, id);

  const addImage = async() => {
    await addClothesEdit();
    setChooseModalState(false);
  };

  return (
    <Container
      onClick={() => addImage()}
      onMouseOver={() => setShowName(true)}
      onMouseOut={() => setShowName(false)}>
      {/* <Image width={120} height={120} alt="clothes" src={url} /> */}
      <MemoClothesImg url={url} type="edit" />
      <ClothesName showName={showName}>
        <MemoTypoGraphy type="sm1" color={customColor.white}>
          {name}
        </MemoTypoGraphy>
      </ClothesName>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  position: relative;
  margin: 0;
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  width: 120px;
  height: 120px;
  cursor: pointer;
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
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;
