import "./index.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import WeatherCard from "./components/WeatherCard/WeatherCard.jsx";
// import ForecastList from "./components/ForecastList/ForecastList.jsx";

function App() {
  return (
    <div className="app">
      <div className="weather-container">
        <SearchBar />
        {/* <WeatherCard />
        <ForecastList /> */}
      </div>
    </div>
  );
}
export default App;
