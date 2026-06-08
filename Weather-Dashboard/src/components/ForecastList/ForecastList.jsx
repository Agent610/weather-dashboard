import "./ForecastList.css";
import { motion } from "framer-motion";
import ForecastCard from "../ForecastCard/ForecastCard";

function ForecastList({ forecast = [] }) {
  return (
    <div className="forecast-list">
      {forecast.map((item, index) => (
        <ForecastCard key={index} day={item.day} temp={item.temp} />
      ))}
    </div>
  );
}

export default ForecastList;
