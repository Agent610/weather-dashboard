import "./ForecastList.css";
import { motion } from "framer-motion";

function ForecastList() {
  const forecast = [
    { day: "Mon", temp: "70°F" },
    { day: "Tue", temp: "74°F" },
    { day: "Wed", temp: "68°F" },
    { day: "Thu", temp: "72°F" },
    { day: "Fri", temp: "75°F" },
  ];

  return (
    <motion.div
      className="forecast-list"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {forecast.map((item, index) => (
        <div className="forecast-card" key={index}>
          <h3>{item.day}</h3>

          <p>{item.temp}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default ForecastList;
