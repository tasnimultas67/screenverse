"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { PlayIcon, PlayPauseIcon } from "@heroicons/react/20/solid";

const Hero = ({ moviesBulk }) => {
  console.log(moviesBulk);
  return (
    <div className="py-1 w-[98%] m-auto">
      <Swiper
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper rounded-xl"
      >
        {moviesBulk.data.movies.slice(0, 10).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="h-[90dvh] w-full m-auto bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${movie.background_image_original})`,
              }}
            >
              <div className="flex flex-col items-start justify-end h-full bg-gradient-to-t from-black to-transparent rounded-xl p-10">
                <div className="space-y-4 flex flex-col items-start justify-end">
                  <div className="flex space-x-2">
                    {movie.genres.map((genre) => (
                      <p
                        key={genre}
                        className="text-xs text-white bg-white/10 backdrop-blur-md p-1 px-2 rounded-md border border-white/10"
                      >
                        {genre}
                      </p>
                    ))}
                  </div>
                  <h1 className="text-6xl font-bold text-white text-start leading-tight">
                    {movie.title_english}
                  </h1>
                  <p className="text-sm text-white text-start">
                    ScreenVerse is the ultimate destination for movie
                    enthusiasts. Dive into a universe of films, where you can
                    upload, explore, and share your favorite movies. With a
                    sleek, user-friendly interface and a vast library of
                    content, ScreenVerse brings the magic of cinema right to
                    your screen.
                  </p>
                  <div className="flex space-x-2">
                    <button className=" py-1.5 px-3 text-sm text-white rounded bg-blue-900 flex items-center justify-center gap-1">
                      <PlayIcon className="size-4"></PlayIcon> Watch Now
                    </button>
                    <button className=" py-1.5 px-3 text-sm text-white rounded">
                      Download Now
                    </button>
                  </div>
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
