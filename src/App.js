import './css/App.css';
import TopBorder from './components/TopBorder.js';
import GoogleDoodle from './components/GoogleDoodle.js';
import SearchBar from './components/SearchBar.js';
import Search from './components/Search.js';
import BottomBorder from './components/BottomBorder.js';

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
