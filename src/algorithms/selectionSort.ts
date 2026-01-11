import { swap } from "../utils/utils";

/**
 * Selection Sort Algorithm
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * @param arr - Array to sort
 * @returns Sorted array
 */
export const selectionSort = (arr: number[]): number[] => {
  let currMin: number;
  let currMinIndex: number;
  let startIndex = 0;
  const length = arr.length;
  let finish = length === 1 ? true : false;

  while (!finish) {
    currMin = arr[startIndex];
    currMinIndex = startIndex;

    for (let i = startIndex; i < length; i++) {
      if (arr[i] < currMin) {
        currMin = arr[i];
        currMinIndex = i;
      }
    }

    if (startIndex !== currMinIndex) {
      swap(arr, startIndex, currMinIndex);
    }

    startIndex++;
    if (startIndex === length - 1) {
      finish = true;
    }
  }

  return arr;
};
