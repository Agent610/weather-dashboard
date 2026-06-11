import { useState } from "react";
import { getWeather } from "../services/weatherAPI";

function useWeather() {
  const [weather, setWeather] = useState({
    location: "Search a city",
    temperature: 0,
    condition: "—",
    stats: {},
    forecast: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);

      console.log("API response:", data);

      const formatted = {
        day: new Date().toLocaleDateString("en-US", {
          weekday: "long",
        }),

        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        
        location: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,

        stats: {
          humidity: data.main.humidity,
          wind: data.wind.speed,
          feelsLike: data.main.feels_like,
          uv: "N/A",
          visibility: data.visibility / 1000, // meters → km
        },

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
