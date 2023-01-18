import React, { useState } from 'react';
import styled from '@emotion/styled';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomButton } from 'components/common';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { Suggestions } from 'types/mainPage';
import { useRouter } from 'next/router';
import { Rating } from 'react-simple-star-rating';

interface Props {
  suggestions: Suggestions[];
}
interface ButtonStyle {
  isCurrent?: boolean;
  slideNum?: number;
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
    <Container slideNum={suggestions.length}>
      <StyledSwiper
        slidesPerView={
          suggestions.length <= 3
            ? suggestions.length
            : 0.5 * (suggestions.length - 1)
        }
        loop={suggestions.length <= 3 ? false : true}
        loopedSlides={suggestions.length <= 3 ? 0 : 5}
        initialSlide={suggestions.length <= 3 ? 1 : 3}
        centeredSlides
        spaceBetween={0}
        slideToClickedSlide
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                    alt={String(id)}
                    layout="fill"
                    style={{ borderRadius: 'inherit' }}
                  />
                </ImageBoxInner>
                <InfoBox isCurrent={idx === isCurrent}>
                  <BottomBox>
                    <RatingBox>
                      <Rating
                        ratingValue={rating}
                        size={24}
                        allowHalfIcon
                        fillColor="#ffe714"
                        emptyColor="#999"
                      />
                    </RatingBox>
                    <MoveBtnBox>
                      <CustomButton
                        customType="white"
                        text="이동"
                        type="button"
                        onClick={() => moveToOutfitView(id)}
                      />
                    </MoveBtnBox>
                  </BottomBox>
                </InfoBox>
              </ImageBox>
            </StyledSwiperSlide>
          );
        })}
      </StyledSwiper>
    </Container>
  );
}

const Container = styled.section<ButtonStyle>`
  position: relative;
  max-height: 800px;
  width: 100%;
  max-width: calc(30% + 14% * ${(props) => props.slideNum});
  height: 100%;
  padding: 10% calc(23% - 4px);
  padding: ${(props) => props.slideNum && props.slideNum <= 3 && '0'};
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
  max-width: 308px;
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
  top: -24px;
  left: 50%;
  box-shadow: 0px 0px 6px #aaa;
  transform: ${(props) =>
    props.isCurrent
      ? 'translate(-50%, 0) scaleX(1.22) scaleY(1.15)'
      : 'translate(-50%, 0) scaleX(0.3) scaleY(0.3)'};
  border-radius: 2px;
  transition: transform 0.5s ease;
  align-items: flex-end;
  padding: 10px 18px;
`;

// 별표 : 왼쪽 하단
const RatingBox = styled.div`
  pointer-events: none;
`;

// 버튼 : 우측 하단
const MoveBtnBox = styled.div``;

const BottomBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
