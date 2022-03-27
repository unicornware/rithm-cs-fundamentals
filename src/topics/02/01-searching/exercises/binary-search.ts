/**
 * @file Searching Algorithms Exercises - binarySearch
 * @module csf/topics/searching/exercises/binarySearch
 */

/**
 * Given a **sorted** integer array, `array`, the function returns the index of
 * `target`, if found. If not found, the function will return `-1`.
 *
 * @example binarySearch([1, 2], 11) => -1
 * @example binarySearch([1, 3, 4], 2) => -1
 * @example binarySearch([1, 2, 3, 4], 0) => -1
 * @example binarySearch([1, 2], 1) => 0
 * @example binarySearch([1, 2, 3, 4], 4) => 3
 * @example binarySearch([1, 2, 3, 4, 5, 6, 7], 6) => 5
 *
 * @param {number[]} array - Integer array
 * @param {number} value - Number to search for in `array`
 * @return {number} Index of `target` if found, `-1` otherwise
 */
const binarySearch = (array: number[], value: number): number => {
  // If nums is empty array, return -1
  if (array.length === 0) return -1

  /** @const {number} m - Index of midpoint in {@link array} */
  let m: number = Math.floor(array.length / 2)

  // Return index of midpoint if target is at midpoint
  if (array[m] === value) return m

  /** @const {boolean} $lt - Search interval check */
  const $lt: boolean = value < array[m]!

  // If target < midpoint, narrow search interval to lower half of nums
  // Otherwise, narrow search interval to upper half of nums.
  // Note: ++m removes nums[m] from the new interval and allows the new value of
  // m to be used later in return statement (to account for interval narrowing)
  array = $lt ? array.slice(0, m) : array.slice(++m)

  // Search for value in array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i + ($lt ? 0 : m)
  }

  // Return -1 if value wasn't found
  return -1
}

export default binarySearch
