import "./WeatherCard.css";

function WeatherCard({ cityName, temperature, condition }) {
  return (
    <div className="weather-card">
      <h2>{cityName}</h2>

      <h1>{temperature}</h1>

      <p>{condition}</p>
    </div>
  );
}

export default WeatherCard;
