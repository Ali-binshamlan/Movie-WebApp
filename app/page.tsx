import Banner from './components/Banner';
import MovieSlaider from './components/MovieSlaider';
import MovieSRow from './components/MovieRow';
import MovieRowBigCard from './components/MoviesRowBigCard';
import GenresSection from './components/GenresSection';
import MovieSlider_tow from './components/MovieSlaider_tow';

export default function page() {
  return (
    <div>
      <Banner />
      <div className="">
        <MovieSlaider category="popular" title="Popular Movies" />
      </div>
      <div className="container mx-auto px-4">
        <MovieRowBigCard category="upcoming" title="UPCOMING" />
      </div>
      <div className="container mx-auto px-4">
        <GenresSection category="top_rated" title="TOP RATED" />
      </div>
      <div className="">
        <MovieSlider_tow category="now_playing" title="NOW PLAYING" />
      </div>
      <div className="container mx-auto px-4">
        <MovieRowBigCard category="upcoming" title="UPCOMING" />
      </div>
    </div>
  );
}
