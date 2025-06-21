import Banner from './components/Banner';
import MovieSlaider from './components/MovieSlaider';
import FeaturedMovie from './components/FeaturedMovie';
import MovieSRow from './components/MovieRow';

export default function page() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4">
        <MovieSlaider category="popular" title="Popular Movies" />
      </div>
      <div className="container mx-auto px-4">
        <MovieSRow category="upcoming" title="UPCOMING" />
      </div>
    </div>
  );
}
