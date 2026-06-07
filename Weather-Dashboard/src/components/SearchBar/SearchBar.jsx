import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ city, setCity }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Searching:", city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button>Search</button>
    </form>
  );
}

export default SearchBar;
