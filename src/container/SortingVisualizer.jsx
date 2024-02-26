import React, { useState } from "react";
import ActionComponet from "../components/ActionComponent";
import BarComponent from "../components/BarComponent";
import "../components/common.css";

const generateRandomNumber = (count) => {
  const randomNumbers = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

const SortingVisualizer = () => {
  const [data, setData] = useState([1, 20, 30, 2, 4, 1, 20, 30, 2, 40]);

  const handleRangeSelect = (range) => {
    const res = generateRandomNumber(range);
    setData(res);
  };

  const getSelectedSort = (sort) => {
    console.log(sort);
  };

  const handleSort = () => {
    setData([20, 10, 30, 30]);
  };

  return (
    <div className="sortingContainer">
      <div className="actions">
        <ActionComponet
          onRangeSelect={handleRangeSelect}
          getSelectedSort={getSelectedSort}
          handleSort={handleSort}
        />
      </div>
      <div className="bars">
        {data?.map((item) => (
          <BarComponent value={item} />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
