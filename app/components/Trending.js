import React from "react";

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    rank: 1,
    id: 1,
    genre: "Drama",
    director: "Frank Darabont",
    description: "Two imprisoned",
    img: "https://goldendiscs.ie/cdn/shop/products/MM00269485.jpg?v=1690917989",
  },
];

const Trending = () => {
  return (
    <div className="py-16">
      <div className="w-11/12 mx-auto p-4 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Trending Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bottom-0 left-0 group/movie-card"
            >
              <div className="shrink-0 relative rounded-lg overflow-hidden w-full h-[10rem] md:h-[21rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-black">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="group-hover/movie-card:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Movies Information */}
              <div className="absolute inset-0 flex flex-col items-start justify-end z-10 p-4 space-y-2">
                <h2 className="text-white text-base/5 font-semibold tracking-tight">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-200 tracking-tight">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
