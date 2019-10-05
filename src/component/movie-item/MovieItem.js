import React from 'react';
import './MovieItem.css';
import logo from '../../logo.svg';
import {Constant} from '../../common/index';

const hasSourcePath = src => {
  return src !== Constant.SRC_IMAGE ? true : false;
}

const setSourcePath = srcPath => {  
  if(hasSourcePath(srcPath)) {
    return srcPath;
  }
  return logo;
}

const MovieItem = ({ Title, Poster, Type, Year}) => {
  return (
    <div className="movie-item">
      <div className="movie-image">
        <img src={setSourcePath(Poster)} alt={ Title + 'picture'}/>
      </div>
      <div className="movie-info">
        <span>title</span>
        <span>type</span>
        <span>year</span>
      </div>
    </div>
  );
}
export default MovieItem;