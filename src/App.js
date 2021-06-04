import './css/App.css';
import TopBorder from './TopBorder.js';
import GoogleDoodle from './GoogleDoodle.js';
import SearchBar from './SearchBar.js';
import Search from './Search.js';

function App() {
  return (
    <div className="App">

      <TopBorder />

      <div className="middle">
        <GoogleDoodle />
        <SearchBar />
      </div>

      <Search />
    </div>
  );
}

export default App;
