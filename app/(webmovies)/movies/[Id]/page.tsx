"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovies,
  Movie,
  MovieCategory,
} from "@/app/services/movieService";

export default function MoviePage() {
  const params = useParams();
  const movieId = Number(params.id);

  const [movie, setMovie] = useState<Movie | null>(null);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovie() {
      console.log("Loading movie with id:", movieId);
      const details = await fetchMovieDetails(movieId);
      console.log("Movie details fetched:", details);
      setMovie(details);

      const similar = await fetchMovies({
        type: MovieCategory.SIMILAR,
        movieId,
      });
      console.log("Similar movies fetched:", similar);
      setSimilarMovies(similar);
    }

    if (movieId) loadMovie();
  }, [movieId]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p className="text-white">Loading movie...</p>;

  return (
    <div className="container mx-auto px-4 text-white mt-10">
      <section
        className="w-full h-[500px] bg-cover bg-center mb-6 rounded-lg p-6 flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        }}
      >
        <div className="bg-black/60 p-6 rounded-lg max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          <p className="text-yellow-400 font-semibold mb-2">
            ⭐ {movie.vote_average}
          </p>
          <p>{movie.overview}</p>
        </div>
      </section>

      <h2 className="text-3xl font-bold mb-4">Similar Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {similarMovies.map((m) => (
          <div
            key={m.id}
            className="rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => window.location.assign(`/movies/${m.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
              alt={m.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="text-yellow-400 text-sm">⭐ {m.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
