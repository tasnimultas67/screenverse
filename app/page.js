import Image from "next/image";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Latest from "./components/Latest";
import TopIMDRated from "./components/TopIMDRated";

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

export default async function Home() {
  const moviesBulk = await fetchMoviesData();
  //   console.log(moviesBulk);
  return (
    <>
      <div className="divide-y divide-gray-200">
        {/* Hero */}
        <Hero moviesBulk={moviesBulk}></Hero>
        {/* Latest Movies */}
        <Latest moviesBulk={moviesBulk}></Latest>
        {/* Trending Movies */}
        <Trending moviesBulk={moviesBulk}></Trending>
        {/* Top IMDB Rated Movies */}
        <TopIMDRated moviesBulk={moviesBulk}></TopIMDRated>
      </div>
    </>
  );
}
