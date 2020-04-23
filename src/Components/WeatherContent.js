import { useState } from "react";
import "../Styles/Weather.css";

function WeatherContent() {
  const [searchQuery, setSearchQuery] = useState();

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="app-container">
      <header>
        <h3>Weather</h3>
        <div>
          <input
            placeholder="Zip"
            className="search-input"
            onChange={udateSearchQuery}
          />
        </div>
      </header>
    </div>
  );
}

export default WeatherContainer;
