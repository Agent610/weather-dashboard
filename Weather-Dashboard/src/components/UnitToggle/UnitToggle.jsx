import "./UnitToggle.css";

function UnitToggle({ unit, setUnit }) {
  return (
    <div className="unit-toggle">
      <button
        className={unit === "F" ? "active" : ""}
        onClick={() => setUnit("F")}
      >
        °F
      </button>

      <button
        className={unit === "C" ? "active" : ""}
        onClick={() => setUnit("C")}
      >
        °C
      </button>
    </div>
  );
}

export default UnitToggle;
