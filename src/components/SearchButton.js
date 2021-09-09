import React from 'react';
import '../css/SearchButton.css';

function SearchButton() {
  return <div className="buttonContainer">
      <div className="button-div-left">
        <button type="submit" value="Google Search">
          Google Search
        </button>
      </div>
      <div className="button-div-right">
        <button type="submit" value="I'm Feeling Lucky">
          I'm Feeling Lucky
        </button>
      </div>
    </div>;
}
export default SearchButton;