import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React, { useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { chooseModal } from 'recoil/atom';
import useAddClothesEdit from 'hooks/useAddClothesEdit';
import { ClothesImg } from 'components/common/clothesBox/ClothesImg';
import imageLayout from 'constants/imageLayout';
import { TypoGraphy } from 'components/common';
import { ProductOneResponse } from '@temperature-outfit/core';

type Props = {
  url?: string;
  name: string;
  id: string;
  recoil: RecoilState<ProductOneResponse[]>;
};

export function ModalClothesBox({ url, name, id, recoil }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const setChooseModalState = useSetRecoilState(chooseModal);
  const { addClothesEdit } = useAddClothesEdit(recoil, id);

  const addImage = async () => {
    await addClothesEdit();
    setChooseModalState(false);
  };

  return (
    <Container
      onClick={() => addImage()}
      onMouseOver={() => setShowName(true)}
      onMouseOut={() => setShowName(false)}>
      <ClothesImg url={url} />
      <ClothesName showName={showName}>
        <TypoGraphy type="sm1" color={customColor.white}>
          {name}
        </TypoGraphy>
      </ClothesName>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  position: relative;
  margin: 0;
  border: 1px solid ${customColor.grayLight};
  border-radius: 6px;
  overflow: hidden;
  width: ${imageLayout.square};
  height: ${imageLayout.square};
  cursor: pointer;
`;
type NameProps = {
  showName: boolean;
};
const ClothesName = styled.div<NameProps>`
  position: absolute;
  background-color: ${customColor.black + '80'};
  border-radius: 4px;
  padding: 4px;
  top: 0px;
  left: 0px;
  opacity: ${({ showName }) => (showName ? 1 : 0)};
`;
