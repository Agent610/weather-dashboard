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

    console.log("Searching city:", city);

    try {
      const data = await getWeather(city);
      console.log("API response:", data);

      const formatted = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,

        stats: {
          humidity: data.current.humidity,
          wind: data.current.wind_mph,
          feelsLike: data.current.feelslike_f,
          uv: data.current.uv,
          visibility: data.current.vis_miles,
        },

        forecast: data.forecast.forecastday.map((day) => ({
          day: day.date,
          temp: day.day.avgtemp_f,
        })),
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
