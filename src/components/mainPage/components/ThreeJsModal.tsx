import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import useModal from 'hooks/useModal';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { LightController } from './LightController';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { WeatherStatusType } from 'types/mainPage';
import { OrbitControls, Stats } from '@react-three/drei';
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
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <Container
      isOpen={isOpen}
      onRequestClose={() => {
        handleCloseModal();
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

  // 드래그방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
