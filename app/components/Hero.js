"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <div className="py-1">
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
      <div className="h-[90dvh] w-[98%] m-auto bg-[url('https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-xl">
        <div className="flex flex-col items-start justify-end h-full bg-gradient-to-t from-black to-transparent rounded-xl p-10">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white">ScreenVerse</h1>
            <p className="text-xl text-white">
              The ultimate destination for movie enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
