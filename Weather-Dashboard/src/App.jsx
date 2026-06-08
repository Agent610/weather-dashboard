import { useState } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard/WeatherCard.jsx";
import ForecastList from "./components/ForecastList/ForecastList.jsx";
import { saveRecentCity } from "./utils/localStorage.js";
import mockWeather from "./data/mockWeather.js";
import RecentSearches from "./components/RecentSearches/RecentSearches.jsx";
import UnitToggle from "./components/UnitToggle/UnitToggle.jsx";
//import RecentSearches from "./components/RecentSearches/RecentSearches.jsx";

function App() {
  const [city, setCity] = useState("");
  const recentSearches = ["New York", "London", "Tokyo", "Paris", "Toronto"];
  const [unit, setUnit] = useState("F");

  return (
    <div className="app">
      <div className="weather-container">
        <SearchBar city={city} setCity={setCity} />

        <WeatherCard cityName="New York" temperature="72°" condition="Sunny" />

        <ForecastList forecast={mockWeather.forecast} />

        <RecentSearches searches={recentSearches} />

        <UnitToggle unit={unit} setUnit={setUnit} />
      </div>
    </div>
  );
}
export default App;
