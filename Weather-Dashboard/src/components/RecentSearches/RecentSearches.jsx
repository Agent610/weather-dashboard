//const searches = ["New York", "London", "Tokyo", "Paris"];
import "./RecentSearches.css";

function RecentSearches({ searches }) {
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>

      <div className="search-chips">
        {searches.map((city, index) => (
          <button key={index} className="search-chip">
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
