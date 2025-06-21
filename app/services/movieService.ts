import axios from "axios";

const API_KEY = "5d658856a3f5f90e04f9eacd28218f16";
const BASE_URL = "https://api.themoviedb.org/3";

export enum MovieCategory {
  POPULAR = "popular",
  TOP_RATED = "top_rated",
  NOW_PLAYING = "now_playing",
  UPCOMING = "upcoming",
  SIMILAR = "similar", 
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface FetchMoviesParams {
  type: MovieCategory;
  page?: number;
  movieId?: number;
  language?: string;
}

export async function fetchMovies({
  type,
  page = 1,
  movieId,
  language = "en-US",
}: FetchMoviesParams): Promise<Movie[]> {
  try {
    let url = "";

    if (type === MovieCategory.SIMILAR && movieId) {
      url = `${BASE_URL}/movie/${movieId}/similar`;
    } else {
      url = `${BASE_URL}/movie/${type}`;
    }

    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        language,
        page,
      },
    });

    const movies: Movie[] = response.data.results.map((movie: any) => ({
      id: movie.id,
      poster_path: movie.poster_path,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
    }));
    

    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
export async function fetchMovieDetails(movieId: number, language = "en-US"): Promise<Movie | null> {
  try {
    const url = `${BASE_URL}/movie/${movieId}`;
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        language,
      },
    });

    const movie = response.data;
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      overview: movie.overview,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}
