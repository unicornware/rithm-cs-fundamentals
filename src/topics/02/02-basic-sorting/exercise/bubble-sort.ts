/**
 * @file Sorting Algorithms Exercise - bubbleSort
 * @module csf/topics/basic-sorting/exercise/bubbleSort
 */

/**
 * Given an array of integers, `nums`, the function sorts the values in the
 * array using bubble sort.
 *
 * @example bubbleSort([4, 5, 1, 21, 2, 9]) => [1, 2, 4, 5, 9, 21]
 * @example bubbleSort([9, -2 , 0, 35, 4, -10]) => [-10, -2, 0, 4, 9, 35]
 *
 * @param {number[]} nums - Integer array
 * @return {number[]} Sorted array
 */
const bubbleSort = (nums: number[]): number[] => {
  // If the array is empty or has one item, do nothing
  if (nums.length <= 1) return nums

  /** @const {number[]} array - Copy of {@link nums} */
  const array: number[] = [...nums]

  // Sort array using bubble sort
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      /** @const {number} curr - Current item */
      const curr: number = array[i]!

      /** @const {number} next - Next item */
      const next: number = array[j]!

      /** @const {number} temp - Temporary {@link curr} */
      let temp: number

      // If the element on the right is greater, swap
      if (next < curr) {
        temp = curr
        array[i] = next
        array[j] = temp
      }
    }
  }

  // Return sorted array
  return array
}

export default bubbleSort
