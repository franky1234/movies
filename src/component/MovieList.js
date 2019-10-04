import React from 'react';
import './MovieList.css';
const MovieList = ({ movieList }) => {
  return (
    <div className="container-movie-list">
      <ul>
        {movieList.map(({ Title }, i) => <li key={i}> {Title}</li>)}
      </ul>
    </div>
  );
}

export default MovieList;