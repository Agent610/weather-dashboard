function UnitToggle({ unit, setUnit }) {
  return (
    <div className="unit-toggle">
      <button onClick={() => setUnit("F")}>°F</button>

      <button onClick={() => setUnit("C")}>°C</button>
    </div>
  );
}

export default UnitToggle;
