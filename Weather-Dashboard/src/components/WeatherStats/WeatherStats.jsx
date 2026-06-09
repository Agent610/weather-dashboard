import "./WeatherStats.css";

function WeatherStats({ humidity, wind, feelsLike, uv, visibility }) {
  const stats = [
    { label: "Humidity", value: humidity },
    { label: "Wind", value: wind },
    { label: "Feels Like", value: feelsLike },
    { label: "UV Index", value: uv },
    { label: "Visibility", value: visibility },
  ];

  return (
    <div className="weather-stats">
      {stats.map((stat) => (
        <div className="weather-stat" key={stat.label}>
          <h3>{stat.label}</h3>

          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherStats;
