/**
 * @file Searching Algorithms Exercises - linearSearch
 * @module csf/topics/searching/exercises/linearSearch
 */

/**
 * Given an integer array, `array`, the function returns the index of `value`,
 * if found. If not found, the function will return `-1`.
 *
 * @example linearSearch([1, 2], 11) => -1
 * @example linearSearch([1, 3, 4], 2) => -1
 * @example linearSearch([1, 2, 3, 4], 0) => -1
 * @example linearSearch([1, 2], 1) => 0
 * @example linearSearch([1, 2, 3, 4], 4) => 3
 * @example linearSearch([1, 2, 3, 4, 5, 6, 7], 6) => 5
 *
 * @param {number[]} array - Integer array
 * @param {number} value - Number to search for in `array`
 * @return {number} Index of `value` if found, `-1` otherwise
 */
const linearSearch = (array: number[], value: number): number => {
  // If array is empty, return -1
  if (array.length === 0) return -1

  // Search for value in array
  for (let i = 0; i < array.length; i++) if (array[i] === value) return i

  // Return -1 if value wasn't found
  return -1
}

export default linearSearch
