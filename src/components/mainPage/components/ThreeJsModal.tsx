import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React from 'react';
import Modal from 'react-modal';
import { LightController } from './LightController';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { WeatherStatusType } from 'types/mainPage';
import { OrbitControls } from '@react-three/drei';
import { TypoGraphy } from 'components/common';
import { copyClipBoard } from 'utils/copyClipBoard';

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
  weatherStatus: WeatherStatusType;
};
export const ThreeJsModal = ({
  isOpen,
  handleCloseModal,
  weatherStatus,
}: Props) => {
  return (
    <Container
      isOpen={isOpen}
      onRequestClose={() => {
        handleCloseModal();
      }}
      style={{
        overlay: {
          background: customColor.black + '66',
          zIndex: 100,
        },
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
          <span
            onClick={() => copyClipBoard('alsldl0580@naver.com', '이메일')}
            style={{ cursor: 'pointer' }}>
            (alsldl0580@naver.com)
          </span>
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
  max-width: 600px;
  height: 50vh;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 40px;
  outline: none;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const BottomBar = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
