"use client";

import React, { useEffect, useState, useRef } from "react";
import { fetchMovies, Movie, MovieCategory } from "../services/movieService";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface MovieSliderProps {
  category: MovieCategory;
  movieId?: number;
  title?: string;
}

export default function MovieSlider({
  category,
  movieId,
  title,
}: MovieSliderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetchMovies({ type: category, movieId }).then((data) => {
      setMovies(data);
      if (data.length > 0 && !selectedMovie) {
        setSelectedMovie(data[0]);
      }
    });
  }, [category, movieId]);

  return (
    <div className="mt-10 relative">
      {title && (
        <div className="container mx-auto px-4 flex items-center justify-between mb-4">
          <h3 className="text-4xl font-bold text-white">{title}</h3>
        </div>
      )}
      {selectedMovie && (
        <section
          className="w-full h-[500px] md:h-[600px] lg:h-[550px] flex flex-col justify-end p-8 bg-no-repeat bg-center mt-4 relative overflow-hidden"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

          <div className=" relative bg-black/60 p-6 rounded-lg max-w-2xl text-white">
            <h2 className="text-4xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="text-yellow-400 font-semibold text-lg mb-2">
              ⭐ {selectedMovie.vote_average}
            </p>
            <p className="text-white">{selectedMovie.overview}</p>
          </div>
        </section>
      )}
      <Swiper
        className="container mx-auto px-4"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: nextRef.current,
          prevEl: null,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex;
          setSelectedMovie(movies[newIndex]);
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 4 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative min-w-72 h-96 cursor-pointer shadow-lg"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent  pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
