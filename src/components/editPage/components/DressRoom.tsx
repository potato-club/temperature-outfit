import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { AiOutlinePlus } from 'react-icons/ai';
import { RecoilState, useRecoilState, useSetRecoilState } from 'recoil';
import { DressBox } from 'components/common';
import { chooseModal } from 'recoil/atom';
import { categoryLabel } from 'recoil/atom/chooseModal';
import { categoryFilter } from 'recoil/atom/filtering';
import { productType } from 'types/editPage/product.type';
type Props = {
  category: string;
  id: string;
  recoil: RecoilState<productType[]>;
};

export function DressRoom({ category, id, recoil }: Props) {
  const [images, setImages] = useRecoilState(recoil);
  const setChooseModalState = useSetRecoilState(chooseModal);
  const setCategoryLabel = useSetRecoilState(categoryLabel);
  const setCategoryFilter = useSetRecoilState(categoryFilter);

  const handleModal = () => {
    setChooseModalState((cur) => !cur);
    setCategoryLabel(category);
    setCategoryFilter(id);
  };

  const deleteImage = (id: string) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <Container>
      {images &&
        images.map((data) => (
          <DressBox
            url={data.imageUrl!}
            id={data.id}
            key={data.id}
            name={data.name}
            deleteFn={deleteImage}
          />
        ))}
      <AddButton onClick={() => handleModal()}>
        <MemoPlusIcon size={30} />
      </AddButton>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  background-color: ${customColor.white};
  padding: 12px;
  width: calc(100% - 9px);
  border-radius: 16px;
  overflow-x: auto;
  gap: 0 12px;
  box-sizing: content-box;
  margin-bottom: 12px;
  box-shadow: 1px 1px 5px -1px ${customColor.grayDark};
  ::-webkit-scrollbar {
    opacity: 0;
    height: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.grayDark};
    border-radius: 24px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
const AddButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  min-width: 126px;
  height: 200px;
  box-shadow: 1px 1px 6px -1px ${customColor.grayDark};
  cursor: pointer;
  &:hover {
    background-color: ${customColor.white};
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
    background-color: ${customColor.white};
  }
`;

const MemoPlusIcon = React.memo(AiOutlinePlus);
