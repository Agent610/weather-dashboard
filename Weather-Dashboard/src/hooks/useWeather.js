import { useState } from "react";
import { getWeather, getForecast } from "../services/weatherApi.js";

function useWeather() {
  const [weather, setWeather] = useState({
    location: "Search a city",
    temperature: 0,
    condition: "—",
    stats: {},
    hourlyForecast: [],
    forecast: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    setLoading(true);
    setError("");

    try {
      const currentData = await getWeather(city);
      const forecastData = await getForecast(city);

      console.log("Current:", currentData);
      console.log("Forecast:", forecastData);

      const formatted = {
        day: new Date().toLocaleDateString("en-US", {
          weekday: "long",
        }),

        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),

        location: currentData.name,
        temperature: currentData.main.temp,
        condition: currentData.weather[0].main,

        stats: {
          humidity: currentData.main.humidity,
          wind: currentData.wind.speed,
          feelsLike: currentData.main.feels_like,
          uv: "N/A",
          visibility: currentData.visibility / 1000, // meters → km
        },

        hourlyForecast: forecastData.list.slice(0, 8).map((hour) => ({
          time: new Date(hour.dt * 1000).toLocaleTimeString([], {
            hour: "numeric",
          }),
          temp: Math.round(hour.main.temp),
          icon: hour.weather[0].icon,
          condition: hour.weather[0].main,
        })),
        forecast: [],
      };

      setWeather(formatted);
    } catch (err) {
      setError(err.message || "Unable to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}

export default useWeather;
