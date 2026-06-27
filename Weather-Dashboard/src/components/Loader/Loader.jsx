import "./Loader.css";
import React from "react";

// function Loader() {
//   return (
//     <div className="loader-container">
//       <div className="loader">
//         <p>Please wait weather data is loading....</p>
//       </div>
//     </div>
//   );
// }

// export default Loader;

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
