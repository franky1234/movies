import React, { useState } from 'react';
import './Search.css';
import { Constant } from '../common/index';
import { MovieList } from '../component/index';
import { MovieService } from '../service/index';

const Search = () => {
  const [search, setSearch] = useState({ text: '', movieList: [] });
  const [errorMessage, setErrorMessage] = useState({ isVisible: false, message: '' });

  const movieListResponse = ({ Response, Search }) => {
    if (Response === Constant.RESPONSE_OK) {
      return [...Search];
    }
    return [];
  }

  const searchMovies = async ({ text }) => {
    try {
      const response = await MovieService.searchMovieList(text);
      // todo: error response      
      setSearch({
        text,
        movieList: movieListResponse(response)
      });
    } catch (error) {

    }
  }

  const onSearchText = () => {
    searchMovies(search);
  }

  const onChangeText = event => {
    const { target: { value }, key } = event;
    if (Constant.KEY_ENTER === key) {
      searchMovies(search);
    }
    const { movieList } = search;
    setSearch({
      text: value,
      movieList
    });
  }
  const showList = () => {
    const { movieList } = search;
    return movieList.length > 0 ? true : false;
  }

  return (
    <div>
      <div className="section-search">
        <div className="wrapper-search">
          <input className="text-search" type="text" onKeyDown={onChangeText} />
          <div className="btn-search-container">
            <button className="button-search" onClick={onSearchText}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      {
        showList() ? <MovieList {...search} /> : ''
      }
    </div>
  );
}

export default Search;