/**
 * Generates an array of N random numbers between min and max (inclusive)
 * @param min - Minimum value
 * @param max - Maximum value
 * @param N - Number of elements to generate
 * @returns Array of random numbers
 */
export const generateNumbers = (
  min: number,
  max: number,
  N: number,
): number[] => {
  const array: number[] = new Array(N);
  const range = max - min;

  for (let i = 0; i < N; i++) {
    array[i] = Math.floor(min) + Math.floor(Math.random() * (range + 1));
  }

  return array;
};

/**
 * Swaps two elements in an array
 * @param arr - Array to modify
 * @param ind1 - Index of first element
 * @param ind2 - Index of second element
 */
export const swap = (arr: number[], ind1: number, ind2: number): void => {
  const buffer = arr[ind2];
  arr[ind2] = arr[ind1];
  arr[ind1] = buffer;
};
