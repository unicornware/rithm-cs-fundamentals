/**
 * @file Recursion Exercise - replicate
 * @module csf/topics/recursion/exercise/replicate
 */

/**
 * Returns an array containing `number` repeated `times` times.
 *
 * @see https://codewars.com/kata/57547f9182655569ab0008c4
 *
 * @example replicate(-5, 3) => []
 * @example replicate(0, 2) => []
 * @example replicate(2, 0) => [0, 0]
 * @example replicate(3, 5) => [5, 5, 5]
 *
 * @param {number} times - Number of times to replicate `number`
 * @param {number} number - Value to replicate
 * @return {number[]} Array containing replicated `num`
 */
const replicate = (times: number, number: number): number[] => {
  // Base case: If number shouldn't be replicated, return empty array
  // Otherwise replicate once and do recursive call to continue replication
  return times <= 0 ? [] : [number, ...replicate(times - 1, number)]
}

export default replicate
