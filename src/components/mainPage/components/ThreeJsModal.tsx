import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import useModal from 'hooks/useModal';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { LightController } from './LightController';
import { Canvas } from "@react-three/fiber";
import { Model } from './Model';
import { WeatherStatusType } from 'types/mainPage';
import { OrbitControls, Stats } from '@react-three/drei';
import { TypoGraphy } from 'components/common';

type Props = {
  isOpen: boolean;
  handleClosetModal: () => void;
  weatherStatus: WeatherStatusType;
};
export const ThreeJsModal = ({ isOpen, handleClosetModal, weatherStatus }: Props) => {
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])
  return (
    <Container
      isOpen={isOpen}
      onRequestClose={() => {
        handleClosetModal();
      }}
      ariaHideApp={false}
      contentLabel="ThreeJsModal">
      <Canvas>
        <Model weatherStatus={weatherStatus} />
        <OrbitControls />
        <LightController />
      </Canvas>
      <BottomBar>
          <TypoGraphy type="body1">디자이너 :&nbsp;</TypoGraphy>
          <TypoGraphy type="body1" color={customColor.darkSky}>
            양뽀코님
          </TypoGraphy>
        <TypoGraphy type="sm1" color={customColor.darkSky}>
          (alsldl0580@naver.com)
        </TypoGraphy>
      </BottomBar>
    </Container>
  );
};

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 680px;
  height: 50vh;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 40px;
  outline: none;
  border-radius: 20px;
  box-shadow: 4px 4px 5px 4px rgba(0, 0, 0, 0.43);
`;

const BottomBar = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;