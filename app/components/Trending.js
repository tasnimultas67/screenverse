"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const Trending = ({ moviesBulk }) => {
  return (
    <div className="py-6">
      <div className="w-[98%] m-auto p-4 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Trending Movies
        </h1>
        <div className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {moviesBulk.data.movies
              .slice(0, 10)
              .reverse()
              .map((movie) => (
                <SwiperSlide key={movie.id}>
                  <div className="">
                    <Link href={`/browse-movies/${movie.id}`}>
                      <div className="relative top-0 left-0 group/movie-card w-full bg-slate-50 h-[10rem] md:h-[21rem]">
                        <div className=" relative rounded-lg overflow-hidden w-full h-[10rem] md:h-[21rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-black">
                          <Image
                            width={200}
                            height={400}
                            src={movie.large_cover_image}
                            alt={movie.title_english}
                            className="group-hover/movie-card:scale-105 transition-transform duration-500 w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full z-[100] p-4 space-y-2 text-start flex items-start justify-start flex-col">
                          <h2 className="text-white text-base/5 font-semibold tracking-tight">
                            {movie.title_english}
                          </h2>
                          <p className="text-sm text-gray-200 tracking-tight line-clamp-2">
                            ScreenVerse is the ultimate destination for movie
                            enthusiasts. Dive into a universe of films, where
                            you can upload, explore, and share your favorite
                            movies.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trending;
