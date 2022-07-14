import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
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
import { useRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';

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

type imageType = {
  image_file: File;
  preview_URL: string;
};

export const AddModal = () => {
  // Todo 메인카테고리를 정하고, 서브카테고리를 정한다음 다시 메인카테고리를 바꾸면, 서브카테고리는 그대로 안바뀌고 남아있게 됨.
  // Todo 예시) 메인 : top , 서브 : 맨투맨 인 상태에서 메인을 bottom 으로 바꾸면, 메인 : 바텀, 서브 : 맨투맨 인 상태.
  // 등록버튼을 눌렀을때 메인과 서브카테고리를 확인해서, 잘못된값이면 error 경고창을 보여주거나, 메인이 바뀔때 서브 카테고리를 초기화 시키는 방법 등에서 하나 해야할거같음
  const [addModalState, setAddModalState] = useRecoilState(addModal);
  const [images, setImages] = useState<imageType>();
  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('red');
  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>();
  const codyRef = useRef<HTMLInputElement>(null);

  // state 확인용 코드 : 위에 있는 Todo 해결하고 지울예정
  useEffect(() => {
    console.log(mainCategory);
  }, [mainCategory]);

  useEffect(() => {
    console.log(subCategory);
  }, [subCategory]);

  useEffect(() => {
    console.log(color);
  }, [color]);

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setImages({
          image_file: e.target.files![0],
          preview_URL: String(fileReader.result!),
        });
      };
      alert('사진 등록!');
      e.target.value = '';
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const addClothesItem = () => {
    // 서버에 옷 등록 로직
    // 성공시 등록이 되었습니다! => 모달
    alert('서버에 옷 등록');
  };

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
            {images ? (
              <Image
                width={360}
                height={360}
                src={images.preview_URL}
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
                  label="전체"
                  dataArray={clothesMainCategory}
                  subCategoryChange={setMainCategory}
                />
              </InputWrapper>
              <InputWrapper>
                <SelectBox
                  label="서브"
                  dataArray={clothesSubCategory[mainCategory]}
                  subCategoryChange={setSubCategory}
                />
              </InputWrapper>
            </CategoryWrapper>
            <RadioButtonsWrapper>
              <RadioButtons setColor={setColor} />
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
