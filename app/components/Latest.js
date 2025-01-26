"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Link from "next/link";

const Latest = ({ moviesBulk }) => {
  return (
    <div className="py-16">
      <div className="p-4 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Latest Movies</h1>
        <div className="">
          <Swiper
            // navigation={true}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {moviesBulk.data.movies.slice(0, 10).map((movie) => (
              <SwiperSlide key={movie.id}>
                <div>
                  <Link
                    href={`/browse-movies/${movie.id}`}
                    className="relative top-0 left-0 group/movie-card w-full bg-slate-50 h-[10rem] md:h-[21rem]"
                  >
                    <div className="w-full">
                      <div className=" relative rounded-lg overflow-hidden w-full h-[10rem] md:h-[21rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-black">
                        <Image
                          width={200}
                          height={400}
                          src={movie.large_cover_image}
                          alt={movie.title_english}
                          className="group-hover/movie-card:scale-105 transition-transform duration-500 w-full h-full object-cover"
                        />
                      </div>
                      {/* Movies Information */}
                      <div className="absolute  w-full z-[100] p-4 space-y-2 text-start bg-slate-500 flex items-start justify-start flex-col">
                        <h2 className="text-white text-base/5 font-semibold tracking-tight">
                          {movie.title_english}
                        </h2>
                        <p className="text-sm text-gray-200 tracking-tight line-clamp-2">
                          ScreenVerse is the ultimate destination for movie
                          enthusiasts. Dive into a universe of films, where you
                          can upload, explore, and share your favorite movies.
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

export default Latest;
