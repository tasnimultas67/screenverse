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
      <div className="container mx-auto p-4 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Trending Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="border p-4 rounded-md relative top-0"
            >
              <div>
                <img src={movie.img} alt={movie.title} />
              </div>
              {/* Movies Information */}
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
