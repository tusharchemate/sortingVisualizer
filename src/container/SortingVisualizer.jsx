import React, { useEffect, useState } from "react";
import ActionComponet from "../components/ActionComponent";
import BarComponent from "../components/BarComponent";
import "../components/common.css";
import {bubbleSort, quickSort} from '../../src/utility/sortingAlgo';


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
  const [selectedSort, setSelectedSort] = useState();
  const [comparingIndices, setComparingIndices] = useState([]);

  const [isComparing, setIsComparing] = useState(false);
  const toggleComparisonState = (value, indices) => {
    setIsComparing(value);
    setComparingIndices(indices);
  };

  const delay = 500;

  const handleRangeSelect = (range) => {
    const res = generateRandomNumber(range);
    setData(res);
  };

  const getSelectedSort = (sort) => {
    setSelectedSort(sort);
  };

  const handleSort = () => {
    if (selectedSort) {
      switch (selectedSort) {
        case "Bubble":
          bubbleSort(data, toggleComparisonState, delay);
          break;
        case "Quick":
          quickSort(data);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    setIsComparing(true);
    setComparingIndices([]);
  }, [isComparing]);

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
        {data?.map((item, index) => (
          <BarComponent
            isComparing={comparingIndices.includes(index)}
            value={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
