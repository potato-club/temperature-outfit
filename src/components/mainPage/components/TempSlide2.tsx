import React from 'react';
import styled from '@emotion/styled';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import right1 from 'assets/img/loginSpin/right1.png';
import right2 from 'assets/img/loginSpin/right2.jpg';
import right3 from 'assets/img/loginSpin/right3.png';
import right4 from 'assets/img/loginSpin/right4.jpg';
import right5 from 'assets/img/loginSpin/right5.png';
import Image from 'next/image';

export function TempSlide2() {
  const arr = [right1, right2, right3, right4, right5];
  SwiperCore.use([EffectCoverflow]);
  const swiperSlide = useSwiperSlide();
  return (
    <Container>
      <Swiper
        effect={'coverflow'}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={5}
        slideToClickedSlide={true} // 클릭시 해당 위치로 이동
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}>
        {arr.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              {({ isActive }) =>
                isActive ? (
                  <CurrentIMG
                    onClick={() => {
                      console.log('qweqw');
                    }}
                  />
                ) : (
                  <Image src={v} alt="임시야" layout="fill" />
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
  .swiper {
    border : 1px solid : red;
    width : 80%;
    margin-top : 30px;
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
  background: red;
  width: 100%;
  height: 100%;
`;

const TempBox = styled.div`
  background: gray;
  width: 100%;
  height: 100%;
`;
