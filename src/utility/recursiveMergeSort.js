export const mergeSortRecursive = async (arr, toggle, delay) => {
    await mergeSort(arr, 0, arr.length - 1, toggle, delay);
    return arr;
  };
  
  const mergeSort = async (arr, low, high, toggle, delay) => {
    // base condition
    if (low >= high) return;
  
    let mid = Math.floor((low + high) / 2);
  
    await mergeSort(arr, low, mid, toggle, delay);
    await mergeSort(arr, mid + 1, high, toggle, delay);
    await merge(arr, low, mid, high, toggle, delay);
  };
  
  const merge = async (arr, low, mid, high, toggle, delay) => {
    let tempArr = [];
  
    let left = low;
    let right = mid + 1;
  
    while (left <= mid && right <= high) {
      if (arr[left] < arr[right]) {
        tempArr.push(arr[left]);
        toggle(true, [left, right]);
        left++;
      } else {
        tempArr.push(arr[right]);
        toggle(true, [right, left]);
        right++;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  
    // Copy remaining elements from left and right subarrays
    while (left <= mid) {
      tempArr.push(arr[left]);
      toggle(true, [left, right]);
      left++;
    }
    while (right <= high) {
      tempArr.push(arr[right]);
      toggle(true, [right, left]);
      right++;
    }
  
    // Copy elements from tempArr back to arr
    for (let i = 0; i < tempArr.length; i++) {
      arr[low + i] = tempArr[i];
    }
  };
  