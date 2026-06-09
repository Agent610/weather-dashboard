import "./SearchBar.css";
//import { FaSearch } from "react-icons/fa";

function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={city} onChange={(e) => setCity(e.target.value)} />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
