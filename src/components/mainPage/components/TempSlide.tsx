import React, { useState } from 'react';
import styled from '@emotion/styled';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { Suggestions } from 'types/mainPage';
import { useRouter } from 'next/router';

interface Props {
  suggestions: Suggestions[];
}

const nullImage = '/codyDummy/Person_icon.png';

export function TempSlide({ suggestions }: Props) {
  const [toggle, setToggle] = useState(true);

  const router = useRouter();
  const moveToOutfitView = (id: string) => {
    router.push(`/outfitView/${id}`);
  };

  SwiperCore.use([EffectCoverflow]);

  return (
    <Container>
      <Swiper
        effect={'coverflow'}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={5}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}>
        {suggestions.map(({ id, imageUrl, rating, temperature }) => {
          return (
            <SwiperSlide key={id}>
              {({ isActive }) =>
                isActive ? (
                  <CurrentBox>
                    <Image
                      src={imageUrl ?? nullImage}
                      alt="임시야"
                      layout="fill"
                      onClick={() => {
                        setToggle((cur) => !cur);
                        // moveToOutfitView(id);
                      }}
                    />
                    {toggle && (
                      <Bottom>
                        {rating}
                        <br />
                        {temperature}
                      </Bottom>
                    )}
                  </CurrentBox>
                ) : (
                  <Image
                    src={imageUrl ?? nullImage}
                    alt="임시야"
                    layout="fill"
                  />
                )
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  max-height: 500px;
  width: 100%;
  height: 100%;
  border: 3px solid #2a12ff;
  overflow : visible none !important;
  .swiper {
    border : 1px solid : red;
    width : 80%;
    /* 가운데 정렬 */
    margin-left : auto;
    margin-right : auto;
  }
  

  // 아이템
  .swiper-slide {
    display : flex;
    justify-content : center;
    align-items : center;
    background : #fff;
    position : relative;
    aspect-ratio : 9/16;
    cursor : pointer;
  }
`;

const CurrentIMG = styled.div`
  background: #2d7b0e;
  width: 100%;
  height: 100%;
`;

const CurrentBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div`
  background: #3386d4;
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: -20px;
  left: 0px;
`;
