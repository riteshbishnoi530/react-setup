import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slickOne from "../assets/images/about-1img.webp";
import slickTwo from "../assets/images/about-2img.webp";
import slickThree from "../assets/images/about-3img.webp";
import { Navigation, Pagination } from "swiper/modules";

const SwiperExample = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>React Swiper Example</h2>
      <Swiper
        spaceBetween={50} 
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}

       
      >
        <SwiperSlide>
          <img className="image" src={slickOne} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={slickTwo} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={slickThree} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperExample;
