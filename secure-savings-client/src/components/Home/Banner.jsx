import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="2xl:flex px-6 justify-between my-10 gap-6 max-w-screen-2xl mx-auto p-4">
      <div className="grid py-20 items-center space-y-2 text-center 2xl:text-left 2xl:w-1/2">
        <h4 className="text-2xl lg:text-2xl text-green-500 font-semibold">
          Simple. Transparent. Secure
        </h4>
        <h2 className="text-2xl lg:text-5xl font-bold">
          <span className="text-red-500">1348+</span> Branch and Sub-branch
        </h2>
        <p className="text-2xl">Believing, Banking and Achieving Different</p>
      </div>
      <div className="2xl:w-1/2">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
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
