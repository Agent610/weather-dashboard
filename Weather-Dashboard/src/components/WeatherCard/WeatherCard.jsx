import "./WeatherCard.css";
import { motion } from "framer-motion";

function WeatherCard({ cityName, temperature, condition }) {
  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{cityName}</h2>
      <h1>{temperature}</h1>
      <p>{condition}</p>
    </motion.div>
  );
}

export default WeatherCard;
