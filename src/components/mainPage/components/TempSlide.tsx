import React, { useState } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { Suggestions } from 'types/mainPage';
import { useRouter } from 'next/router';

interface Props {
  suggestions: Suggestions[];
}
interface ButtonStyle {
  isCurrent: boolean;
}

const nullImage = '/codyDummy/Person_icon.png';

export function TempSlide({ suggestions }: Props) {
  const [isCurrent, setIsCurrent] = useState(3);

  const router = useRouter();
  const moveToOutfitView = (id: string) => {
    router.push(`/outfitView/${id}`);
  };

  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <Container>
      <StyledSwiper
        slidesPerView={suggestions.length <= 2 ? 1 : 3}
        loop={suggestions.length <= 2 ? false : true}
        loopedSlides={suggestions.length <= 2 ? 0 : 5}
        initialSlide={suggestions.length <= 2 ? 1 : 3}
        centeredSlides
        spaceBetween={0}
        slideToClickedSlide
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.2,
          slideShadows: false,
        }}
        onRealIndexChange={(e) => {
          setIsCurrent(e.realIndex);
        }}
        effect={'coverflow'}
        modules={[EffectCoverflow]}>
        {suggestions.map(({ id, imageUrl, rating, temperature }, idx) => {
          return (
            <StyledSwiperSlide key={id}>
              <ImageBox isCurrent={idx === isCurrent}>
                <ImageBoxInner isCurrent={idx === isCurrent}>
                  <Image
                    src={imageUrl ?? nullImage}
                    alt="임시야"
                    layout="fill"
                    style={{ borderRadius: 'inherit' }}
                  />
                </ImageBoxInner>
                <InfoBox isCurrent={idx === isCurrent}>
                  {rating}
                  {temperature}
                </InfoBox>
              </ImageBox>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  max-height: 800px;
  width: 100%;
  height: 100%;
  padding: 10% calc(10% - 8px);
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: visible !important;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
const ImageBox = styled.div<ButtonStyle>`
  display: flex;
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
`;
const ImageBoxInner = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: #fff;
  box-shadow: 0px 0px 6px #aaa;
  transform: ${(props) =>
    props.isCurrent ? 'translate(0,-72px) scale(1.1);' : 'translate(0,0px);'};
  ${(props) => !props.isCurrent && 'filter:contrast(50%);'};
  transition: transform 0.5s ease, filter 0.3s ease;
`;
const InfoBox = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  background: #fff;
  z-index: 4;
  width: 100%;
  height: 100%;
  top: -28px;
  left: 50%;
  box-shadow: 0px 0px 6px #aaa;
  transform: ${(props) =>
    props.isCurrent
      ? 'translate(-50%, 0) scaleX(1.22) scaleY(1.15)'
      : 'translate(-50%, 0) scaleX(0.3) scaleY(0.3)'};
  border-radius: 2px;
  transition: transform 0.5s ease;
  align-items: flex-end;
  padding: 12px 16px;
`;
