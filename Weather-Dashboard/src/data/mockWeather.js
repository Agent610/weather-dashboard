const mockWeather = {
  location: "New York",
  temperature: 72,
  condition: "Sunny",

  stats: {
    humidity: "65%",
    wind: "10 mph",
    feelsLike: "75°F",
    uv: "4",
    visibility: "10 mi",
  },

  forecast: [
    { day: "Mon", temp: "72°" },
    { day: "Tue", temp: "75°" },
    { day: "Wed", temp: "70°" },
    { day: "Thu", temp: "74°" },
    { day: "Fri", temp: "77°" },
  ],
};

export default mockWeather;
