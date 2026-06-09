import { useState } from "react";

import mockWeather from "../data/mockWeather";

function useWeather() {
  const [weather, setWeather] = useState(mockWeather);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const searchWeather = async (city) => {
    setLoading(true);

    setError("");

    try {
      setWeather({
        ...mockWeather,
        location: city,
      });
    } catch (err) {
      setError("Unable to fetch weather.");
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
