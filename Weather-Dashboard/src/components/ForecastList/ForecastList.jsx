import "./ForecastList.css";

function ForecastList() {
  const forecast = [
    { day: "Mon", temp: "70°F" },
    { day: "Tue", temp: "74°F" },
    { day: "Wed", temp: "68°F" },
    { day: "Thu", temp: "72°F" },
    { day: "Fri", temp: "75°F" },
  ];

  return (
    <div className="forecast-list">
      {forecast.map((item, index) => (
        <div className="forecast-card" key={index}>
          <h3>{item.day}</h3>

          <p>{item.temp}</p>
        </div>
      ))}
    </div>
  );
}

export default ForecastList;
