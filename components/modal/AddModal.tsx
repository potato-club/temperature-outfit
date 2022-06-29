import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CustomButton, SelectBox, TypoGraphy } from 'components/common';
import { RadioButtons } from 'components/closet/components';
import Image from 'next/image';
import { IoMdImage } from 'react-icons/io';
import {
  customColor,
  clothesMainCategory,
  clothesSubCategory,
} from 'constants/index';

const customStyles = {
  content: {
    width: '620px',
    borderRadius: '20px',
    boxShadow: '4px 4px 5px 4px rgba(0,0,0,0.43)',
    inset: '12% 40px 40px 36%',
    height: '800px',
    // 어느정도 낮아지면 그냥 가로로 하든가 아니면 크기 줄이던가 해야됨
  },
};

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const AddModal = ({ modalIsOpen, closeModal }: ModalProps) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState('top');
  const [clothesName, setClothesName] = useState('');
  const [images, setImages] = useState('');

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    console.log(e.target.value);
    console.log(e.target.files);
    //   if (e.target.value) {
    //     setImages(e.target.value);
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(e.target.files![0]);

    //     // fileReader.onload = () => {
    //     //   setImages({
    //     //     id: imageId.current++,
    //     //     image_file: e.target.files![0],
    //     //     preview_URL: String(fileReader.result!),
    //     //   });
    //     // };
    //     alert('사진 등록!');
    //     e.target.value = '';
    //   }
  };
  // color 받기
  // 해당 카테고리 state 받기

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setClothesName(e.currentTarget.value);
  };

  const addClothesItem = () => {
    // 서버에 옷 등록 로직
    // 성공시 등록이 되었습니다! => 모달
    alert('서버에 옷 등록');
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Modal">
      <Wrapper>
        <Title>
          <TypoGraphy type="h1" fontWeight="bold">
            옷 등록하기
          </TypoGraphy>
        </Title>
        <AddButton
          id={`imgUpload`}
          type="file"
          accept="image/*"
          onChange={addImage}
        />
        <Label htmlFor={`imgUpload`}>
          <IoMdImage size={200} color={customColor.black} opacity={0.5} />
        </Label>
        {/* <Image
          src={'C:\fakepath초록감자.png'}
          alt="등록할 옷사진"
          width={100}
          height={100}
        /> */}

        {/* <Image src={images} alt="Landscape picture" /> */}

        <Image
          src={'src="https://example.com/test"'}
          alt="등록할 옷사진"
          width={100}
          height={100}
        />
        <ContentBox>
          <InputWrapper>
            <TypoGraphy type="h3" fontWeight="bold">
              이름
            </TypoGraphy>
            <Input
              value={clothesName}
              placeholder="옷의 이름을 입력해주세요."
              onChange={onChange}
            />
          </InputWrapper>
          <CategoryWrapper>
            <InputWrapper>
              <SelectBox
                label="전체"
                dataArray={clothesMainCategory}
                subCategoryChange={setSelectedMainCategory}
              />
            </InputWrapper>
            <InputWrapper>
              <SelectBox
                label="서브"
                dataArray={clothesSubCategory[selectedMainCategory]}
              />
            </InputWrapper>
          </CategoryWrapper>
          <RadioButtonsWrapper>
            <RadioButtons />
          </RadioButtonsWrapper>
          <ButtonWrapper>
            <CustomButton
              customType="colorful"
              text="등록"
              sidePadding="20"
              onClick={addClothesItem}
            />
          </ButtonWrapper>
        </ContentBox>
      </Wrapper>
    </Modal>
  );
};
const Img = styled.article`
  width: 100%;
  height: 400px;
  background-color: ${customColor.gray};
  border-radius: 40px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* height: 760px; */
  gap: 10px;
  padding: 20px;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const CategoryWrapper = styled.section`
  display: flex;
  gap: 10px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

const Input = styled.input`
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${customColor.gray};
  padding-left: 10px;
  margin-top: 4px;
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const RadioButtonsWrapper = styled.section``;

const Title = styled.section``;

const AddButton = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 100%;
  height: 400px;
  background-color: ${customColor.gray};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
