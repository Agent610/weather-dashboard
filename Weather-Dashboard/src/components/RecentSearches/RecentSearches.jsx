import "./RecentSearches.css";

function RecentSearches({ searches, onSearch }) {
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>

      <div className="search-chips">
        {searches.map((city, index) => (
          <button
            key={index}
            className="search-chip"
            onClick={() => onSearch(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
