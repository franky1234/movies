import React from 'react';
import './MovieList.css';
import { MovieItem } from '../index';

const MovieList = ({ movieList }) => {
  return (
    <div className="container-movie-list">
      {movieList.map((movie, i) => <MovieItem key={i} {...movie} />)}
    </div>
  );
}

export default MovieList;