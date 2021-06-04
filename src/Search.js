import React from 'react';
import './css/Search.css';
import SearchButton from './SearchButton.js';
import LuckySearchButton from './LuckySearchButton.js';

function Search() {
  return <div className="buttons">
    <SearchButton />
    <LuckySearchButton />
  </div>;
}

export default Search;