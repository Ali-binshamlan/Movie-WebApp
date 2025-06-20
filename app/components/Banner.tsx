import React from "react";
import MovieRow from "./MovieRow";
import { MovieCategory } from "../services/movieService";

export default function Banner() {
  return (
    <>
      <section
        className="w-full h-64 md:h-[400px] lg:h-[900px] bg-cover bg-center bg-no-repeat flex flex-col px-4 md:px-16 lg:px-8 "
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="md:flex md:flex-col text-center md:text-left text-white md:max-w-3/4 gap-16 ">
          <h1 className="text-2xl mt-4 md:text-7xl font-extrabold md:text-left md:mt-24">
            MADAME WEB
          </h1>
          <p className="text-xs mt-4 md:text-sm lg:text-base font-light text-gray-300 md:w-3/4">
            Pendant ce temps, dans un autre univers Dans une variation du genre
            classique, Madame Web raconte les origines de l'une des plus
            énigmatiques héroïnes des bandes dessinées Marvel. Le suspense met
            en vedette Dakota Johnson dans le rôle de Cassandra Webb, une
            ambulancière de Manhattan ayant des dons de voyance. Contrainte de
            faire face à des révélations sur son passé, elle
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 md:py-4 rounded hover:bg-yellow-500 transition mt-4 text-sm md:text-lg md:w-1/4">
            Explore Now
          </button>
        </div>

        <div className="mt-10">
          <h3 className="text-4xl font-bold text-white mb-4">TOP RATED</h3>
          <MovieRow category={MovieCategory.TOP_RATED} />
        </div>
      </section>
    </>
  );
}
