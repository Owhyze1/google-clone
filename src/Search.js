import React from 'react';
import './css/Search.css';
import SearchButton from './SearchButton.js';

function Search() {
  return <div className="container">
    <div className="buttons">
      <SearchButton />
    </div>
  </div>;
}

export default Search;