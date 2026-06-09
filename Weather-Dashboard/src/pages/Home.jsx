import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import WeatherStats from "../components/WeatherStats/WeatherStats";
import ForecastList from "../components/ForecastList/ForecastList";
import RecentSearches from "../components/RecentSearches/RecentSearches";
import UnitToggle from "../components/UnitToggle/UnitToggle";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import useWeather from "../hooks/useWeather";
import { convertTemp } from "../utils/convertTemp";

function Home() {
  const [city, setCity] = useState("");

  const [unit, setUnit] = useState("F");

  const { weather, loading, error, searchWeather } = useWeather();

  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    searchWeather(city);

    setRecentSearches((prev) => {
      const updated = [
        city,
        ...prev.filter((item) => item.toLowerCase() !== city.toLowerCase()),
      ];

      return updated.slice(0, 5);
    });

    setCity("");
  };

  const handleRecentSearch = (selectedCity) => {
    setCity(selectedCity);

    searchWeather(selectedCity);
  };

  return (
    <>
      <BackgroundAnimation />

      <div className="weather-container">
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

        <UnitToggle unit={unit} setUnit={setUnit} />

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <>
            <WeatherCard
              cityName={weather.location}
              temperature={`${convertTemp(weather.temperature, unit)}°${unit}`}
              condition={weather.condition}
            />

            <WeatherStats
              humidity={weather.stats.humidity}
              wind={weather.stats.wind}
              feelsLike={weather.stats.feelsLike}
              uv={weather.stats.uv}
              visibility={weather.stats.visibility}
            />

            <ForecastList forecast={weather.forecast} />

            {recentSearches.length > 0 && (
              <RecentSearches
                searches={recentSearches}
                onSearch={handleRecentSearch}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
