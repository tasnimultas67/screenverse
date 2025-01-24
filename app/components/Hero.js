"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Hero = ({ moviesBulk }) => {
  console.log(moviesBulk);
  return (
    <div className="py-1 w-[98%] m-auto">
      <Swiper spaceBetween={5} className="mySwiper rounded-xl">
        {moviesBulk.data.movies.slice(0, 5).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="h-[90dvh] w-full m-auto bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${movie.background_image_original})`,
              }}
            >
              <div className="flex flex-col items-start justify-end h-full bg-gradient-to-t from-black to-transparent rounded-xl p-10">
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold text-white">
                    {movie.title_english}
                  </h1>
                  <p className="text-xl text-white">
                    The ultimate destination for movie enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
