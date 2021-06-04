import React from 'react';
import './css/SearchButton.css';

function SearchButton() {
  return <div className="button-div">
      <button type="submit" value="Google Search">
        Google Search
      </button>
      <button type="submit" value="I'm Feeling Lucky">
        I'm Feeling Lucky
      </button>
    </div>;
}

export default SearchButton;