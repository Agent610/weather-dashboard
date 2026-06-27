import "./HourlyForecast.css";

function HourlyForecast({ hourlyData }) {
  return (
    <section className="hourly-forecast">
      <h2>Hourly Forecast</h2>

      <div className="hourly-scroll">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hour-card">
            <p>{hour.time}</p>

            <img
              src={`https://openweathermap.org/img/wn/${hour.icon}.png`}
              alt={hour.condition}
            />

            <h3>{hour.temp}°</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
