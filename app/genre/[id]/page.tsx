"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  fetchMoviesByGenre,
  fetchGenres,
  Movie,
  Genre,
} from "../../services/movieService";

export default function GenrePage() {
  const params = useParams();
  const genreId = Number(params.id);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreName, setGenreName] = useState<string>("");

  useEffect(() => {
    async function loadGenresAndMovies() {
      const [genresData, moviesData] = await Promise.all([
        fetchGenres(),
        fetchMoviesByGenre(genreId),
      ]);

      setGenres(genresData);
      setMovies(moviesData);

      const selectedGenre = genresData.find((g) => g.id === genreId);
      setGenreName(selectedGenre ? selectedGenre.name : "Unknown Genre");
    }

    if (genreId) {
      loadGenresAndMovies();
    }
  }, [genreId]);

  return (
    <div className="container mt-10 px-4 md:px-16 text-white">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-yellow-400 border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">{genreName}</h1>

      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="rounded overflow-hidden shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="text-yellow-400 text-sm">
                  ⭐ {movie.vote_average}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
