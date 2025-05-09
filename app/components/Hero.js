"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { PlayIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import "../globals.css";
import Link from "next/link";
import * as motion from "motion/react-client";

const Hero = ({ moviesBulk }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  console.log(moviesBulk);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="py-1 w-[98%] m-auto"
    >
      <Swiper
        spaceBetween={5}
        // effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-xl"
      >
        {moviesBulk?.data?.movies.slice(0, 10).map((movie) => (
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
                    {movie?.genres?.map((genre) => (
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
                    <button className=" text-sm text-white rounded bg-white/40 hover:bg-white/60 backdrop-blur-lg">
                      <Link
                        href={`/browse-movies/${movie.id}`}
                        className="py-1.5 px-3 flex items-center justify-center gap-1"
                      >
                        <InformationCircleIcon className="size-4"></InformationCircleIcon>
                      </Link>
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
    </motion.div>
  );
};

export default Hero;
