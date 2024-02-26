
export const bubbleSort = async (arr, toggleComparisonState, delay) => {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          toggleComparisonState(true, [j, j + 1]);
          await new Promise((resolve) => setTimeout(resolve, delay));

          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;

          toggleComparisonState(false, []);
        //  setData([...arr]);
        }
      }
    }
    return swapped;
  };


  export const quickSort = async (arr) => {
  }