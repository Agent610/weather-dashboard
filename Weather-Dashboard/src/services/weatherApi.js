const BASE_URL = "https://openweathermap.org/";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city) => {
  const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`;

  console.log("Request URL:", url);

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error("Failed to fetch weather");
  }

  return await res.json();
};
