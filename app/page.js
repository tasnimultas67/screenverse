import Image from "next/image";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <>
      <div>
        <Hero></Hero>
        {/* Trending Movies */}
        <Trending></Trending>
      </div>
    </>
  );
}
