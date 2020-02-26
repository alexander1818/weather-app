import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/Auth';

function App() {



  return (
    <div className="App">

      {/* <div>
        <main>
          <div className="search-box">
            <input className="search-bar" type="text" placeholder="Search..."
              onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country} </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}*C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>

          ) : ('')}
        </main>
      </div> */}

      <Auth  />
    </div>
  );
}

export default App;
