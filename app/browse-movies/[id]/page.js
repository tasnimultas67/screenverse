import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function fetchMovieDetails(_id) {
  const res = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${_id}`
  );
  https: if (!res.ok) {
    return null;
  }
  return res.json();
}

const page = async ({ params }) => {
  const movie = await fetchMovieDetails(params?.id);
  if (!movie) {
    notFound();
  }
  return (
    <div className="py-14 w-11/12 m-auto space-y-2">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        <div>
          <Image
            className="rounded-md border w-full "
            src={movie.data.movie.large_cover_image}
            alt=""
            width={300}
            height={600}
          ></Image>
        </div>
        <div className="col-span-3 text-start">
          <h2 className="text-3xl font-bold tracking-tight">
            {movie.data.movie.title}
          </h2>
        </div>
      </div>
      {/* Summery */}
      <div className="p-3 bg-gray-200 rounded-md space-y-2">
        <p className="text-sm font-bold">Plot Summery</p>
        <p className="text-sm">{movie.data.movie.description_intro}</p>
      </div>
    </div>
  );
};

export default page;
