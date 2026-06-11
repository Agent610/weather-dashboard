import "./WeatherCard.css";

function WeatherCard({ day, date, cityName, temperature, condition }) {
  const weatherIcons = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Mist: "🌫️",
  };
  return (
    <div className="weather-card">
      <p className="weather-day">
        {day} • {date}
      </p>

      <h2>{cityName}</h2>

      <p className="weather-condition">
        {weatherIcons[condition] || "🌍"} {condition}
      </p>

      <h1>{temperature}</h1>
    </div>
  );
}

export default WeatherCard;
