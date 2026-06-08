import "./ForecastCard.css";
import { WiDaySunny } from "react-icons/wi";

function ForecastCard({ day, temp }) {
  return (
    <div className="forecast-card">
      <h3>{day}</h3>

      <WiDaySunny className="forecast-icon" />

      <p>{temp}</p>
    </div>
  );
}

export default ForecastCard;
