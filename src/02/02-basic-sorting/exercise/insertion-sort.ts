/**
 * @file Basic Sorting Algorithms Exercise - insertionSort
 * @module csf/topics/basic-sorting/exercise/insertionSort
 */

/**
 * Given an array of integers, `nums`, the function sorts the values in the
 * array using insertion sort.
 *
 * @example insertionSort([4, 5, 1, 21, 2, 9]) => [1, 2, 4, 5, 9, 21]
 * @example insertionSort([9, -2 , 0, 35, 4, -10]) => [-10, -2, 0, 4, 9, 35]
 *
 * @param {number[]} nums - Integer array
 * @return {number[]} Sorted array
 */
const insertionSort = (nums: number[]): number[] => {
  // If the array is empty or has one item, do nothing
  if (nums.length <= 1) return nums

  /** @const {number[]} array - Copy of {@link nums} */
  const array: number[] = [...nums]

  // Sort array using insertion sort
  for (let i = 1; i < array.length; i++) {
    // If previous item is greater than current item, perform swap
    if (array[i - 1]! > array[i]!) {
      /** @const {number} j - Current index in sorted portion of array  */
      let j: number = i

      // Iterate through sorted portion of array to properly position curr
      while (j >= 0) {
        /** @const {number} curr - Current sorted item */
        const curr: number = array[j]!

        /** @const {number} prev - Previous sorted item */
        const prev: number = array[j - 1]!

        /** @const {number} temp - Temporary {@link curr} */
        let temp: number

        // If previous sorted item is greater than current sorted item, swap
        if (prev > curr) {
          temp = curr
          array[j] = prev
          array[j - 1] = temp
        }

        // Move on to next item
        j--
      }
    }
  }

  // Return sorted array
  return array
}

export default insertionSort
