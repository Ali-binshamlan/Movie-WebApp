import Banner from "../components/Banner";
import MovieSlaider from "../components/MovieSlaider";
import MovieSRow from "../components/MovieRow";
import MovieRowBigCard from "../components/MoviesRowBigCard";
import GenresSection from "../components/GenresSection";
import MovieSlider_tow from "../components/MovieSlaider_tow";
import { MovieCategory } from "../services/movieService";

export default function Page() {
  return (
    <div>
      <Banner />
      <div className="">
        <MovieSlaider category={MovieCategory.POPULAR} title="Popular Movies" />
      </div>
      <div className="container mx-auto px-4">
        <MovieRowBigCard category={MovieCategory.UPCOMING} title="UPCOMING" />
      </div>
      <div className="container mx-auto px-4">
        <GenresSection />
      </div>
      <div className="">
        <MovieSlider_tow
          category={MovieCategory.NOW_PLAYING}
          title="NOW PLAYING"
        />
      </div>
      <div className="container mx-auto px-4">
        <MovieRowBigCard category={MovieCategory.UPCOMING} title="UPCOMING" />
      </div>
    </div>
  );
}
