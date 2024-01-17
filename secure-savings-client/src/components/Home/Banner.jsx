import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="lg:flex justify-between my-10 gap-6">
      <div className="block items-center md:p-28 space-y-2 text-center lg:text-left">
        <h4 className="text-xl lg:text-2xl text-green-500 font-semibold">
          Simple. Transparent. Secure
        </h4>
        <h2 className="text-2xl lg:text-5xl font-bold">
          <span className="text-red-500">1348+</span> Branch and Sub-branch
        </h2>
        <p className="text-base">Believing, Banking and Achieving Different</p>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.postimg.cc/wMXFJH3b/worldbankday.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/Z5LV7Tb8/cards.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/fTwR6NYz/homeLoan.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
