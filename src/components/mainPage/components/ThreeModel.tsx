import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import React, { useCallback, useState } from 'react';
import { LightController, Model } from './index';
import { WeatherStatusType } from 'types/mainPage';
import Image from 'next/image';
import { confirmModal } from 'utils/interactionModal';
import { ThreeJsModal } from './ThreeJsModal';
import { useModal } from 'hooks/useModal';

interface Prop {
  weatherStatus: WeatherStatusType;
}

export const ThreeModel = ({ weatherStatus }: Prop) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const modalConfirm = useCallback(() => {
    confirmModal(
      '날씨 3D 모델링 파일을 보시겠습니까?',
      () => handleOpenModal(),
      '예',
      '아니오',
      '3D 모델링 파일은 확대/축소가 가능합니다',
    );
  }, [handleOpenModal]);
  return (
    <Container>
      <Image
        onClick={modalConfirm}
        src={`/weatherModel/${weatherStatus}.gif`}
        width={164}
        height={150}
        alt="weather"
      />
      <ThreeJsModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        weatherStatus={weatherStatus}
      />
    </Container>
  );
};

const Container = styled.section`
  width: 16%;
  text-align: center;
  margin-right: 4px;
`;
