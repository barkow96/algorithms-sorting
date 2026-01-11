import { swap } from "../utils/utils";

/**
 * Bubble Sort Algorithm
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * @param arr - Array to sort
 * @returns Sorted array
 */
export const bubbleSort = (arr: number[]): number[] => {
  let length = arr.length;
  let finish = length === 1 ? true : false;

  while (!finish) {
    finish = true;
    for (let i = 0; i < length; i++) {
      if (i + 1 <= length - 1) {
        if (arr[i + 1] < arr[i]) {
          swap(arr, i, i + 1);
          finish = false;
        }
      }
    }

    length--;
  }

  return arr;
};
