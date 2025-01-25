"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { PlayIcon } from "@heroicons/react/20/solid";
import { Download } from "lucide";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import "../globals.css";

const Hero = ({ moviesBulk }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  console.log(moviesBulk);
  return (
    <div className="py-1 w-[98%] m-auto">
      <Swiper
        spaceBetween={5}
        // effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
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
              <div className="flex flex-col items-start justify-end h-full bg-gradient-to-t from-black to-transparent rounded-xl p-5 md:p-10">
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
                  <h1 className="text-3xl md:text-6xl font-bold text-white text-start leading-tight">
                    {movie.title_english}
                  </h1>
                  <p className="text-xs/5 md:text-sm text-white text-start md:w-10/12">
                    ScreenVerse is the ultimate destination for movie
                    enthusiasts. Dive into a universe of films, where you can
                    upload, explore, and share your favorite movies. With a
                    sleek, user-friendly interface and a vast library of
                    content, ScreenVerse brings the magic of cinema right to
                    your screen.
                  </p>
                  <div className="flex space-x-2">
                    <button className=" py-1.5 px-3 text-sm text-white rounded bg-red-800 flex items-center justify-center gap-1">
                      <PlayIcon className="size-4"></PlayIcon> Watch Now
                    </button>
                    <button className="py-1.5 px-3 text-sm text-white rounded bg-white/40 hover:bg-white/60 backdrop-blur-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </button>
                    <button className="py-1.5 px-3 text-sm text-white rounded bg-white/40 hover:bg-white/60 backdrop-blur-lg">
                      <InformationCircleIcon className="size-4"></InformationCircleIcon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
