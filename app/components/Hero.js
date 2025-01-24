"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <div>
      {/* <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <div className="h-screen bg-slate-300 ">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">ScreenVerse</h1>
          <p className="text-xl text-white">
            The ultimate destination for movie enthusiasts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
