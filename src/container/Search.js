import React, { useState } from 'react';
import './Search.css';
import { Constant } from '../common/index';
import { MovieList, ErrorMessage } from '../component/index';
import { MovieService } from '../service/index';

const Search = () => {
  const [search, setSearch] = useState({ text: '', movieList: [], borderStyle: 'border-list' });
  const [errorMessage, setErrorMessage] = useState({ isVisible: false, message: '', borderStyle: 'border-error' });

  const movieListResponse = ({ Response: response, Search: search, Error: error }) => {
    if (response === Constant.RESPONSE_OK) {
      return [...search];
    }
    setErrorMessage({
      isVisible: true,
      message: error,
      borderStyle: 'border-error'
    });
    return [];
  }

  const searchMovies = async ({ text }) => {
    try {
      const response = await MovieService.searchMovieList(text);
      const movieList = movieListResponse(response);
      setSearch({
        text,
        movieList,
        borderStyle: 'border-list'
      });
    } catch ({ message }) {
      setErrorMessage({
        isVisible: true,
        message,
        borderStyle: 'border-error'
      });
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
      movieList,
      borderStyle: 'border-list'
    });
  }
  const showList = () => {
    const { movieList } = search;
    return movieList.length > 0 ? true : false;
  }

  const { isVisible } = errorMessage;
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
        showList() ? <MovieList {...search} /> : isVisible ? <ErrorMessage {...errorMessage} /> : ''
      }
    </div>
  );
}

export default Search;