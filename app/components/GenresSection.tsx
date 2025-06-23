"use client";

import React, { useEffect, useState } from "react";
import { fetchGenres, Genre } from "../services/movieService";
import Link from "next/link";

export default function GenresSection() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    async function loadGenres() {
      const data = await fetchGenres();
      setGenres(data);
    }
    loadGenres();
  }, []);

  return (
    <section className="mt-10 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-white mb-6">Genres des Films</h2>

      <div className="flex flex-wrap gap-4">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre/${genre.id}`}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition text-sm md:text-base"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
