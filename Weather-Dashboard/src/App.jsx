import { useState } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard/WeatherCard.jsx";
import ForecastList from "./components/ForecastList/ForecastList.jsx";
import { saveRecentCity } from "./utils/localStorage.js";
import mockWeather from "./data/mockWeather.js";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="app">
      <div className="weather-container">
        <SearchBar city={city} setCity={setCity} />

        <WeatherCard cityName="New York" temperature="72°" condition="Sunny" />

        <ForecastList forecast={mockWeather.forecast} />
      </div>
    </div>
  );
}
export default App;
