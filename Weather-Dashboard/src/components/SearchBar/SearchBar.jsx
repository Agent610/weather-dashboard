import "./SearchBar.css";
import { FaMagnifyingGlass, FaLocationDot } from "react-icons/fa6";

function SearchBar({ city, setCity, onSearch }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <div className="search-input-container">
        <FaLocationDot className="search-location-icon" />

        <input
          type="text"
          value={city}
          placeholder="Search for a (City, State)"
          onChange={(e) => setCity(e.target.value)}
          aria-label="Search for a city and state"
        />

        <button type="submit">
          <FaMagnifyingGlass />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
