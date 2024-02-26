import React, { useState } from "react";
import "../components/common.css";

const Actioncomponent = ({ onRangeSelect, getSelectedSort, handleSort }) => {
  const [range, setRange] = useState(0);

  const onSelectSpeed = (e) => {
    setRange(e.target.value);
    onRangeSelect(e.target.value);
  };

  const onHandleSortSelect = (e) => {
    getSelectedSort(e.target.value);
  };

  const onHandleSort = () => {
    handleSort();
  };

  return (
    <div className="action">
      <input
        min={0}
        max={20}
        value={range}
        onChange={(e) => onSelectSpeed(e)}
        type="range"
      />

      <select onChange={onHandleSortSelect}>
        <option disabled selected>
          {" "}
          Select Sort
        </option>
        <option value="Bubble">Bubble Sort</option>
        <option value="Quick">Quick Sort</option>
        <option value="Merge">Merge Sort</option>
      </select>

      <button onClick={onHandleSort}>Sort </button>
    </div>
  );
};

export default Actioncomponent;
