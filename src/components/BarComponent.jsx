import React from "react";
import "../components/common.css";

const BarComponent = ({ value, isComparing }) => {
  return (
    <div
      className={`bar ${isComparing ? "comparing" : ""}`}
      style={{ height: `${value * 5}px` }}
    ></div>
  );
};

export default BarComponent;
