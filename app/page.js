import Image from "next/image";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Latest from "./components/Latest";
import TopIMDRated from "./components/TopIMDRated";

async function fetchPortfolios() {
  try {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const portfolios = await res.json();
    return portfolios;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return [];
  }
}

export default async function Home() {
  const moviesBulk = await fetchPortfolios();
  //   console.log(moviesBulk);
  return (
    <>
      <div className="divide-y divide-gray-200 w-[98%] m-auto">
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
