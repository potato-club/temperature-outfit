import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CustomButton, SelectBox, TypoGraphy } from 'components/common';
import { ColorRadio } from 'components/closet/components';
import Image from 'next/image';
import { IoMdImage } from 'react-icons/io';
import {
  customColor,
  clothesMainCategory,
  clothesSubCategory,
} from 'constants/index';
import { useRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { productApi } from 'api';

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

export const AddModal = () => {
  const [addModalState, setAddModalState] = useRecoilState(addModal);
  const [image, setImage] = useState<File>();
  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [mainCategory, setMainCategory] = useState<string>('top');
  const [subCategory, setSubCategory] = useState<string>('sleeveless');
  const [thumbnail, setThumbnail] = useState<string>('');

  const codyRef = useRef<HTMLInputElement>(null);

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setThumbnail(String(fileReader.result!));
      };
      setImage(e.target.files![0]);
      alert('사진 등록!');
      e.target.value = '';
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const addClothesItem = async () => {
    if(!(image && name && subCategory && color)) {
      alert('상품의 이미지, 이름, 카테고리, 색상을 지정해주세요!')
      return;
    }
    const frm = new FormData();
    frm.append('image', image!);
    frm.append('name', name);
    frm.append('categoryId', subCategory);
    frm.append('color', color);
    const data = await productApi.addProduct(frm);
    console.log(data);
    // 성공시 등록이 되었습니다! => 모달
    alert('서버에 옷 등록');
  };

  useEffect(() => {
    setColor('');
  }, [mainCategory, subCategory]);

  // 확인용 코드
  useEffect(() => {
    console.log(image);
  }, [image]);
  useEffect(() => {
    console.log(name);
  }, [name]);
  useEffect(() => {
    console.log(subCategory);
  }, [subCategory]);
  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <Modal
      isOpen={addModalState}
      onRequestClose={() => setAddModalState((cur) => !cur)}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Add Modal">
      <Wrapper>
        <Title>
          <TypoGraphy type="h1" fontWeight="bold">
            옷 등록하기
          </TypoGraphy>
        </Title>

        <AddButton
          id="codyImage"
          ref={codyRef}
          type="file"
          accept="image/*"
          onChange={addImage}
        />
        <ImageWrapper>
          {thumbnail ? (
            <Image
              width={360}
              height={360}
              src={thumbnail}
              alt="clothes"
              onClick={() => codyRef.current && codyRef.current.click()}
            />
          ) : (
            <InitialImage
              size={360}
              opacity={0.5}
              onClick={() => codyRef.current && codyRef.current.click()}
            />
          )}
        </ImageWrapper>

        <ContentBox>
          <InputWrapper>
            <TypoGraphy type="h3" fontWeight="bold">
              이름
            </TypoGraphy>
            <Input
              value={name}
              placeholder="옷의 이름을 입력해주세요."
              onChange={onChange}
            />
          </InputWrapper>
          <CategoryWrapper>
            <InputWrapper>
              <SelectBox
                label="메인"
                dataArray={clothesMainCategory.slice(1)}
                categoryChange={setMainCategory}
                changeSubByMain={setSubCategory}
                value={mainCategory}
                modal
              />
            </InputWrapper>
            <InputWrapper>
              <SelectBox
                label="서브"
                dataArray={clothesSubCategory[mainCategory].slice(1)}
                categoryChange={setSubCategory}
                value={subCategory}
                modal
              />
            </InputWrapper>
          </CategoryWrapper>
          <RadioButtonsWrapper>
            <ColorRadio color={color} setColor={setColor} />
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
// const Img = styled.article`
//   width: 100%;
//   height: 400px;
//   background-color: ${customColor.gray};
//   border-radius: 40px;
// `;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
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

const InitialImage = styled(IoMdImage)`
  width: 100%;
  background-color: ${customColor.gray};
  border-radius: 40px;
`;

const ImageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
