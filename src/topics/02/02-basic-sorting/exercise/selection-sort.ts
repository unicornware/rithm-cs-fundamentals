/**
 * @file Basic Sorting Algorithms Exercise - selectionSort
 * @module csf/topics/basic-sorting/exercise/selectionSort
 */

/**
 * Given an array of integers, `nums`, the function sorts the values in the
 * array using selection sort.
 *
 * @example selectionSort([4, 5, 1, 21, 2, 9]) => [1, 2, 4, 5, 9, 21]
 * @example selectionSort([9, -2 , 0, 35, 4, -10]) => [-10, -2, 0, 4, 9, 35]
 *
 * @param {number[]} nums - Integer array
 * @return {number[]} Sorted array
 */
const selectionSort = (nums: number[]): number[] => {
  // If the array is empty or has one item, do nothing
  if (nums.length <= 1) return nums

  /** @const {number[]} array - Copy of {@link nums} */
  const array: number[] = [...nums]

  /** @const {number} min_index - Index of minimum */
  let min_index: number

  // Sort array using selection sort
  for (let i = 0; i < array.length - 1; i++) {
    /** @const {number} curr - Current item */
    const curr: number = array[i]!

    // Set index of minimum to shift boundary of unsorted array at each step
    min_index = i

    // Compare each item in array to minimum value to find true minimum
    for (let j = i + 1; j < array.length; j++) {
      // If smaller value is found, reassign index of minimum
      if (array[j]! < array[min_index]!) min_index = j
    }

    // Position minimum value correctly
    array[i] = array[min_index]!
    array[min_index] = curr
  }

  // Return sorted array
  return array
}

export default selectionSort
