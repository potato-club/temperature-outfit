import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CustomButton, SelectBox, TypoGraphy } from 'components/common';
import { ColorRadio } from 'components/closet/components';
import Image from 'next/image';
import { IoMdImage } from 'react-icons/io';
import {
  customColor,
} from 'constants/index';
import { useRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { infoModal } from 'utils/interactionModal';
import { useForm } from 'react-hook-form';
import { MainSubSelectBox } from './components/index';
import { ClothesInput } from './components/ClothesInput';

export const AddModal = () => {
  const [addModalState, setAddModalState] = useRecoilState(addModal);
  const [image, setImage] = useState<File>();
  // const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('');
  // const [mainCategory, setMainCategory] = useState<string>('top');
  // const [subCategory, setSubCategory] = useState<string>('sleeveless');
  const { register, handleSubmit, setValue, getValues } = useForm();
  

  const resetState = () => {
    setImage(undefined);
    // setName('');
    setColor('');
    // setMainCategory('top');
    // setSubCategory('sleeveless');
    // setThumbnail('');
  };


  // const addImage = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   if (e.target.value[0]) {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(e.target.files![0]);
  //     fileReader.onload = () => {
  //       setThumbnail(String(fileReader.result!));
  //     };
  //     setImage(e.target.files![0]);
  //     infoModal('옷 사진 등록완료!', 'success');
  //     e.target.value = '';
  //   }
  // };

  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   setName(e.currentTarget.value);
  // };

  const addClothesItem = async (data: any) => {
    // if (!(image && name && subCategory && color)) {

    const test = data;
    console.log(test);

    // * 기존에 쓰던코드
    // if (!(image && subCategory && color)) {
    //   infoModal(
    //     '확인 해주세요!',
    //     'error',
    //     '상품의 이미지, 이름, 카테고리, 색상을 지정해주세요!',
    //   );
    //   return;
    // }
    // const frm = new FormData();
    // frm.append('image', image!);
    // // frm.append('name', name);
    // frm.append('categoryId', subCategory);
    // frm.append('color', color);
    // const data = await productApi.addProduct(frm);
    // console.log(data);
    // // 성공시 등록이 되었습니다! => 모달
    // infoModal('서버에 옷 등록완료!', 'success');

    // resetState();
    // setAddModalState((cur) => !cur);
  };

  // useEffect(() => {
  //   setColor('');
  // }, [mainCategory, subCategory]);

  // 확인용 코드
  useEffect(() => {
    console.log(image);
  }, [image]);
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  // useEffect(() => {
  //   console.log(subCategory);
  // }, [subCategory]);
  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <Container
      isOpen={addModalState}
      onRequestClose={() => {
        setAddModalState((cur) => !cur);
        resetState();
      }}
      ariaHideApp={false}
      contentLabel="Add Modal">
      <Wrapper>
        <Title>
          <TypoGraphy type="h1" fontWeight="bold">
            옷 등록하기
          </TypoGraphy>
        </Title>

        <form onSubmit={handleSubmit(addClothesItem)}>
          {/* <ClothesInput
            id="clothesImage"
            type="file"
            accept="image/*"
            // onChange={addImage}
            // {...register('clothesImage')}
            {...rest}
            ref={(e) => {
              ref(e)
              clothesInputRef.current = e;
            }}
          />
          <ImageWrapper>
            {thumbnail ? (
              <Image
                width={360}
                height={360}
                src={thumbnail}
                alt="clothes"
                onClick={() => clothesInputRef.current && clothesInputRef.current.click()}
              />
            ) : (
              <InitialImage
                size={360}
                opacity={0.5}
                onClick={() => clothesInputRef.current && clothesInputRef.current.click()}
              />
            )}
          </ImageWrapper> */}
          <ClothesInput register={register} />

          <ContentBox>
            <InputWrapper>
              <TypoGraphy type="h3" fontWeight="bold">
                이름
              </TypoGraphy>
              <Input
                // value={name}
                placeholder="옷의 이름을 입력해주세요."
                {...register('name')}
              />
            </InputWrapper>
            <CategoryWrapper>
              <MainSubSelectBox
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
              {/* <InputWrapper>
                <select {...register('main')}>
                  {clothesMainCategory.slice(1).map((data: any) => (
                    <option value={data.id} key={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </InputWrapper>
              <InputWrapper>
                <select {...register('sub')}>
                  {clothesSubCategory[mainCategory].slice(1).map((data: any) => (
                    <option value={data.id} key={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </InputWrapper> */}
            </CategoryWrapper>
            <RadioButtonsWrapper>
              <ColorRadio color={color} setColor={setColor} />
            </RadioButtonsWrapper>
            <ButtonWrapper>
              <CustomButton
                customType="colorful"
                text="등록"
                sidePadding="20"
                type="submit"
                // onClick={addClothesItem}
              />
            </ButtonWrapper>
          </ContentBox>
        </form>
      </Wrapper>
    </Container>
  );
};

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 680px;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 5px 4px rgba(0, 0, 0, 0.43);
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
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
