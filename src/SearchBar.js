import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import MicTwoToneIcon from '@material-ui/icons/MicTwoTone';

function SearchBar() {
  return <div className="search">
    <div className="searchBar-container">
      <div  className="icon left">
        <SearchIcon/>
      </div>
      <input />
      <div className="icon right">
        <MicTwoToneIcon  />
      </div>
    </div>
  </div>;
}

export default SearchBar;