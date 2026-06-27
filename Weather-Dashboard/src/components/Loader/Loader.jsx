import "./Loader.css";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 20,
        backgroundColor: "#fff",
        zIndex: 9999,
      }}
    >
      <div className="loader-content">
        <h1>Please wait weather data is loading...</h1>
        <span className="circle-preloader"></span>
      </div>
    </div>
  );
}

export default Loader;
