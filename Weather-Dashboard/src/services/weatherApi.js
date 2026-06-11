const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  console.log("Request URL:", url);

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error("Failed to fetch weather");
  }

  return await res.json();
};
