import './App.css';
import TopBorder from './TopBorder.js';
import GoogleDoodle from './GoogleDoodle.js';
import SearchBar from './SearchBar.js';

function App() {
  return (
    <div className="App">

      {/* Top Border */}
      <TopBorder />

      <div className="middle">
        <GoogleDoodle />

        <SearchBar />
        {/* Icon shortcuts */}
        {/* Bottom Border */}
      </div>
    </div>
  );
}

export default App;
