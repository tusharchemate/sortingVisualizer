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

const quickSort = () => {
  console.log("==quick");
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

  const bubbleSort = async (arr) => {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          toggleComparisonState(true, [j, j + 1]);
          await new Promise((resolve) => setTimeout(resolve, 2000));

          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;

          toggleComparisonState(false, []);
          setData([...arr]);
        }
      }
    }
    return swapped;
  };

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
          bubbleSort(data);
          break;
        case "Quick":
          quickSort(data);
          break;
        default:
          break;
      }
    }
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
