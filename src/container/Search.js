import React, { useState } from 'react';
import './Search.css';
import { Constant } from '../common/index';

const Search = () => {
  const [search, setSearch] = useState({ text: '', movieList: [] });

  const onSearchText = ({ event }) => {
    console.log('button search', search.text);

  }

  const onChangeText = event => {
    const { target: { value }, key } = event;
    if (Constant.KEY_ENTER === key) {
      console.log('key enter search', search.text);
    }

    setSearch({
      text: value
    })
  }

  const { text, movieList } = search;
  return (
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
  );
}

export default Search;