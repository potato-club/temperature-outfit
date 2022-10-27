import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { RecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { chooseModal } from 'recoil/atom';
import useAddClothesEdit from 'hooks/useAddClothesEdit';
import { MemoTypoGraphy } from 'components/common/TypoGraphyTest';
import { MemoClothesImg } from 'components/common/clothesBox/ClothesImg';
import { ProductDetailResponse } from '../../../../../types';
import { modalRegister } from 'recoil/atom/chooseModal';

type Props = {
  url: string;
  name: string;
  id: string;
  recoil: RecoilState<ProductDetailResponse[]>;
};

export function ModalClothesBox({ url, name, id, recoil }: Props) {
  const [showName, setShowName] = useState<boolean>(false);
  const setChooseModalState = useSetRecoilState(chooseModal);
  const { addClothesEdit } = useAddClothesEdit(recoil);

  const {ref, onChange, ...rest} = useRecoilValue(modalRegister);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const addImage = () => {
    addClothesEdit(id);
    setChooseModalState(false);
  };

  return (
    <Container
      onClick={() => inputRef.current && inputRef.current.click()}
      onMouseOver={() => setShowName(true)}
      onMouseOut={() => setShowName(false)}>
      {/* <Image width={120} height={120} alt="clothes" src={url} /> */}
      <MemoClothesImg url={url} type="edit" />
      <ClothesName showName={showName}>
        <MemoTypoGraphy type="sm1" color={customColor.white}>
          {name}
        </MemoTypoGraphy>
      </ClothesName>
      <input
        style={{ display: 'none' }}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        onClick={() => {
          onChange(id); // * 사이트 로직이 옷장에 등록된 item 들을 카테고리에 맞게 불러와서 선택된 옷들을 productsId 에 넣어서 서버에 보내주는 형식인데,
                        // * React-Hook-Form 은 input 에서 보내는 이벤트 자체를 넘겨줘야하는 형식이므로 기존에 우리가 하던 방식이 적절하다고 판단됨.
        }}
      />
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
