import React from "react";
import "../components/common.css";

const BarComponent = ({ value }) => {
  return <div className="bar" style={{ height: `${value*5}px` }}>{value}</div>;
};

export default BarComponent;
