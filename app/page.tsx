import Banner from './components/Banner';
import MovieSlaider from './components/MovieSlaider';
import React from 'react';

export default function page() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4">
        <MovieSlaider category="popular" title="Popular Movies" />
      </div>
    </div>
  );
}
