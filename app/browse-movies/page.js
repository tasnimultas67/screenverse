import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchMoviesData() {
  try {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const movies = await res.json();
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

const page = async () => {
  const moviesBulk = await fetchMoviesData();
  return (
    <div className="w-[98%] mx-auto space-y-2 py-2 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {moviesBulk.data.movies.map((movie) => (
          <div className="" key={movie.id}>
            <Link href={`/browse-movies/${movie.id}`}>
              <div className="relative top-0 left-0 group/movie-card w-full bg-slate-50 h-[18rem] md:h-[21rem]">
                <div className=" relative rounded-lg overflow-hidden w-full h-[18rem] md:h-[21rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-black">
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
                    enthusiasts. Dive into a universe of films, where you can
                    upload, explore, and share your favorite movies.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
