"use client";

import React, { useEffect, useState, useRef } from "react";
import { fetchMovies, Movie, MovieCategory } from "../services/movieService";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineArrowRight } from "react-icons/ai";

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
          <button
            ref={nextRef}
            className="text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-white hover:text-black transition"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      )}
      <Swiper
        className="container mx-auto px-4"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: nextRef.current,
          prevEl: null,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={16}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onClick={() => setSelectedMovie(movie)}
              className="w-full h-full md:min-w-[300px] md:h-[170px] rounded-lg shadow-lg cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedMovie && (
        <section
          className="w-full h-[500px] md:h-[600px] lg:h-[480px] flex flex-col justify-end p-8 bg-cover bg-no-repeat bg-center mb-10"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="relative bg-black/60 p-6 rounded-lg max-w-2xl text-white">
            <h2 className="text-4xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="text-yellow-400 font-semibold text-lg mb-2">
              ⭐ {selectedMovie.vote_average}
            </p>
            <p className="text-gray-300">{selectedMovie.overview}</p>
          </div>
        </section>
      )}
    </div>
  );
}
