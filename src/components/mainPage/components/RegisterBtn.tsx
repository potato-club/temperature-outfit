import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { TypoGraphy } from 'components/common';
import { customColor, koreaToday } from 'constants/index';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { todayCodyApi } from 'api';
import { confirmModal } from 'utils/interactionModal';
import Image from 'next/image';

interface ButtonStyle {
  isHover: boolean;
  isActive?: boolean;
}

export function RegisterBtn() {
  const router = useRouter();
  const { refetch } = useQuery(
    'haveTodayOutfit',
    () => todayCodyApi.getManyOutfit(koreaToday, koreaToday),
    {
      enabled: false,
      onSuccess: ({ data }) => {
        if (data.length === 0) {
          router.push({
            pathname: `/edit`,
            query: {
              day: koreaToday,
            },
          });
        } else if (data.length > 0) {
          const { id } = data[0];
          confirmModal(
            '이미 등록된 코디가 있습니다.',
            () => {
              router.push({
                pathname: `/outfitView/${id}`,
              });
            },
            '이동',
            '취소',
          );
        }
      },
    },
  );

  const onClick = () => {
    refetch();
  };

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <ButtonWrapper>
      <ButtonInner
        onClick={onClick}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setIsActive(false);
        }}
        onMouseDown={() => {
          setIsActive(true);
        }}
        onMouseUp={() => {
          setIsActive(false);
        }}>
        <ButtonShdow isHover={isHover} isActive={isActive} />
        <ButtonBody />
        <ButtonContent isHover={isHover} isActive={isActive}>
          <TypoGraphy
            type="body2"
            fontWeight="bold"
            color={customColor.darkSky}>
            오늘의 코디등록
          </TypoGraphy>
          <Hanger isHover={isHover} isActive={isActive}>
            <Image
              src={'/decoration/hanger.png'}
              alt="hanger"
              width="44px"
              height="44px"
            />
          </Hanger>
        </ButtonContent>
      </ButtonInner>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 72px;
  bottom: 80px;
  width: 124px;
  height: 58px;
  padding-top: 5px;
  align-items: flex-start;
  justify-content: center;
`;
const ButtonInner = styled.button`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  align-items: center;
  justify-content: center;
  font-family: 'LeferiPoint-WhiteObliqueA';
  cursor: pointer;
`;
const ButtonContent = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  z-index: 5;
  white-space: nowrap;
  background: ${customColor.white};
  border: 2px solid ${customColor.darkSky};
  border-radius: 16px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.5px;
  padding-top: 4px;
  align-items: center;
  justify-content: center;
  transform: rotateX(20deg);
  transition: top 0.1s ease, padding 0.3s ease, background 0.3s ease;
  overflow: hidden;
  top: -5px;
  ${(props) => props.isHover && 'padding-top: 32px;'}
  ${(props) => props.isHover && 'color:#000;'}
  ${(props) => props.isHover && 'background:#e7f1ff;'}
  ${(props) => props.isHover && 'top:-7px;'}
  ${(props) => props.isActive && 'top:-2px;'}
`;

const Hanger = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  transform: translate(0, -40px);
  ${(props) => props.isHover && 'transform:translate(0, -4px);'}
  top: 0px;
  transition: transform 0.5s ease;
  pointer-events: none;
`;

const ButtonBody = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${customColor.darkSky};
  border-radius: 16px;
  transition: top 0.1s ease;
`;

const ButtonShdow = styled.span<ButtonStyle>`
  position: absolute;
  top: 4px;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: hsl(0deg 0% 0% / 0.18);
  will-change: transform;
  transform: translateY(2px);
  transition: top 0.1s ease;
  ${(props) => props.isHover && 'top:5px;'}
  ${(props) => props.isActive && 'top:2px;'}
`;
