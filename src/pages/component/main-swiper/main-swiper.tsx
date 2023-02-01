import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./main-swiper.module.css";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import Banner01 from "../../../../public/banner01.jpg";
import Banner02 from "../../../../public/banner02.jpg";

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
          <Image src={Banner01} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner02} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
