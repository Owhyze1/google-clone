import './css/App.css';
import TopBorder from './TopBorder.js';
import GoogleDoodle from './GoogleDoodle.js';
import SearchBar from './SearchBar.js';
import Search from './Search.js';
import BottomBorder from './BottomBorder.js';

function App() {
  return (
    <div className="app">
      <TopBorder />
      <div className="doodle-and-search-div">
        <GoogleDoodle />
        <SearchBar />
        <Search />
      </div>
      <BottomBorder />
    </div>
  );
}

export default App;
