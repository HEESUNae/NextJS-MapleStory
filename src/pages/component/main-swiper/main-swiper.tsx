import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./main-swiper.module.css";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

export default function MainSwiper() {
  return (
    <>
      <Swiper
        loop={true}
        effect={"fade"}
        navigation={true}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // style={swiperStyle}
      >
        <SwiperSlide>
          <Image src="/banner01.jpg" fill alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner02.jpg" fill alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
