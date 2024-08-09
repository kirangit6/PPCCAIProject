import React from "react";
import "../Style/Loader.css"; // Import the CSS file

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="loader-container">
        <div className="loader"></div>
        <div className="overlay"></div>
      </div>
    )
  );
};

export default Loader;
