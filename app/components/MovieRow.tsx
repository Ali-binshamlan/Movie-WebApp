"use client";

import React, { useEffect, useState } from "react";
import { fetchMovies, Movie, MovieCategory } from "../services/movieService";
import { useRouter } from "next/navigation";

interface MovieRowProps {
  category: MovieCategory;
  movieId?: number;
  title?: string;
}

export default function MovieRow({ category, movieId, title }: MovieRowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchMovies({ type: category, movieId });
      setMovies(data);
    }
    loadMovies();
  }, [category, movieId]);

  return (
    <div className="mt-10">
      {title && <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>}
      <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide">
        {movies.length === 0 && <p className="text-white">Loading movies...</p>}
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[150px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg"
              onClick={() => router.push(`/movies/${movie.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
