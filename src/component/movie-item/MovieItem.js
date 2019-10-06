import React from 'react';
import './MovieItem.css';
import logo from '../../logo.svg';
import { Constant } from '../../common/index';

const hasSourcePath = src => {
  return src !== Constant.SRC_IMAGE ? true : false;
}

const setSourcePath = srcPath => {
  if (hasSourcePath(srcPath)) {
    return srcPath;
  }
  return logo;
}

const MovieItem = ({ Title: title, Poster: poster, Type: type, Year: year }) => {
  return (
    <div className="movie-item">
      <div className="movie-image">
        <img src={setSourcePath(poster)} alt={title + 'picture'} />
      </div>
      <div className="movie-info">
        <div className="movie-top-info">
          <span className="movie-title">
            {title}
          </span>
          <span className="movie-year">
            {year}
          </span>
        </div>
        <span className="movie-description">
          <p>
            {type}
          </p>
        </span>
      </div>
    </div>
  );
}
export default MovieItem;