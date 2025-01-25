import Image from "next/image";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

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
      <div>
        <Hero moviesBulk={moviesBulk}></Hero>
        {/* Trending Movies */}
        <Trending moviesBulk={moviesBulk}></Trending>
      </div>
    </>
  );
}
