import { Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="py-4 w-[98%] m-auto space-y-2">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        <div>
          <Image
            className="rounded-xl border w-full "
            src={movie.data.movie.large_cover_image}
            alt=""
            width={415}
            height={620}
          ></Image>
        </div>
        <div
          className="col-span-3 text-start w-full m-auto bg-cover bg-center rounded-xl h-full"
          style={{
            backgroundImage: `url(${movie.data.movie.background_image_original})`,
          }}
        >
          <div className=" bg-gradient-to-r from-black to-transparent  p-3 md:p-8 h-full rounded-xl flex flex-col justify-end space-y-3">
            <p className="text-sm tracking-tight text-white flex items-center gap-1">
              <Star className="size-4 fill-yellow-300 text-yellow-300"></Star>
              {movie.data.movie.rating}
            </p>
            <div className="flex space-x-1">
              {movie.data.movie.genres.map((genre) => (
                <p
                  key={genre}
                  className="text-xs text-gray-200 bg-white/10 backdrop-blur-md p-1 px-2 rounded-md border border-white/10"
                >
                  {genre}
                </p>
              ))}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {movie.data.movie.title}
            </h2>
            <p className="text-sm tracking-tight text-white">
              {movie.data.movie.year}
            </p>
            <p className="text-xs/5 md:text-sm text-gray-300 text-start md:w-10/12">
              {movie.data.movie.description_full
                ? movie.data.movie.description_full
                : "ScreenVerse is the ultimate destination for movie enthusiasts. Dive into a universe of films, where you can upload, explore, and share your favorite movies. With a sleek, user-friendly interface and a vast library of content, ScreenVerse brings the magic of cinema right to your screen."}
            </p>
            <div className="flex space-x-1">
              {movie.data.movie.torrents &&
                movie.data.movie.torrents.map((torrent) => (
                  <button key={torrent.url}>
                    <Link
                      className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg text-white p-2 rounded-md px-4 flex items-center justify-center gap-1 text-xs border border-white/20"
                      href={torrent.url}
                    >
                      <Download className="size-3" />
                      {torrent.quality}
                    </Link>
                  </button>
                ))}
            </div>
          </div>
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
