import { swap } from "../utils/utils";

/**
 * Partition function for Quick Sort
 * @param arr - Array to partition
 * @param leftIndex - Left boundary
 * @param rightIndex - Right boundary
 * @returns Partition index
 */
const partition = (
  arr: number[],
  leftIndex: number,
  rightIndex: number,
): number => {
  const middleElement = arr[Math.floor((rightIndex + leftIndex) / 2)];
  let i = leftIndex;
  let j = rightIndex;

  while (i <= j) {
    while (arr[i] < middleElement) i++;
    while (arr[j] > middleElement) j--;

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

/**
 * Quick Sort Algorithm
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n)
 * @param arr - Array to sort
 * @param leftIndex - Left boundary
 * @param rightIndex - Right boundary
 * @returns Sorted array
 */
export const quickSort = (
  arr: number[],
  leftIndex: number,
  rightIndex: number,
): number[] => {
  let index: number;
  if (arr.length > 1) {
    index = partition(arr, leftIndex, rightIndex);
    if (leftIndex < index - 1) {
      quickSort(arr, leftIndex, index - 1);
    }
    if (index < rightIndex) {
      quickSort(arr, index, rightIndex);
    }
  }
  return arr;
};
