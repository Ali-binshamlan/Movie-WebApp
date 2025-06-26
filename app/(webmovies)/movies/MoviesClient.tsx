"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchRandomMovies, Movie } from "../../services/movieService";

export default function MoviesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = Number(searchParams.get("page")) || 1;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [loading, setLoading] = useState(false);

  const updateUrl = (newPage: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", String(newPage));
    router.push(url.toString());
  };

  const loadMovies = async (pageNumber: number) => {
    setLoading(true);
    const data = await fetchRandomMovies(pageNumber);
    setMovies(data);
    if (data.length > 0) setSelectedMovie(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  const handleNextPage = () => {
    const next = page + 1;
    setPage(next);
    updateUrl(next);
  };

  const handlePrevPage = () => {
    const prev = Math.max(page - 1, 1);
    setPage(prev);
    updateUrl(prev);
  };

  return (
    <div className="mt-10">
      {selectedMovie && (
        <section
          className="w-full h-[500px] md:h-[600px] lg:h-[550px] flex flex-col justify-end p-8 bg-no-repeat bg-center mt-4 relative overflow-hidden"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="relative bg-black/60 p-6 rounded-lg max-w-2xl text-white z-10">
            <h2 className="text-4xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="text-yellow-400 font-semibold text-lg mb-2">
              ⭐ {selectedMovie.vote_average}
            </p>
            <p className="text-white">{selectedMovie.overview}</p>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading ? (
          <div className="text-white text-lg col-span-full text-center">
            Loading...
          </div>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="relative cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent pointer-events-none rounded-lg" />
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={page === 1 || loading}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ← Previous
        </button>
        <span className="text-white font-semibold">Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={loading}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
