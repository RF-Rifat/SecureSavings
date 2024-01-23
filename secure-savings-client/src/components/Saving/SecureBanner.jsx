import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import ServiceBannerImg from "./ServiceBannerImg";

export default function SecureBanner() {
  const bannerData = [
    {
      header: "SEO Optimization",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Utenim ad minim veniam",
      img: "https://i.postimg.cc/GtLq0f0d/pexels-vlada-karpovich-4050291.jpg",
    },
    {
      header: "Second Heading",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Utenim ad minim veniam",
      img: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
    {
      header: "third Heading",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Utenim ad minim veniam",
      img: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      header: "Fourth Heading",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Utenim ad minim veniam",
      img: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          speed: 800,
        }}
        loop={true}
        style={{ height: "90vh" }}
      >
        {bannerData.map((data) => (
          <SwiperSlide key={data.img} aria-disabled>
            <ServiceBannerImg
              img={data?.img}
              header={data?.header}
              para={data.para}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
