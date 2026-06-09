const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city) => {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`,
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};
