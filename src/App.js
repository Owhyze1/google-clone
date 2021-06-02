import './App.css';
import TopBorder from './TopBorder.js';
import GoogleDoodle from './GoogleDoodle.js';

function App() {
  return (
    <div className="App">

      {/* Top Border */}
      <TopBorder />

      <div className="middle">
        <GoogleDoodle />

        {/* Searchbar */}
        {/* Icon shortcuts */}
        {/* Bottom Border */}
      </div>
    </div>
  );
}

export default App;
