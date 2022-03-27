/**
 * @file Recursion Exercises - search
 * @module csf/topics/recursion/exercises/search
 */

/**
 * Given an integer array, `nums`, the function returns the index of `target`,
 * if found. If not found, the function will return `-1`.
 *
 * @example search([1, 2, 3, 4, 5], 5) => 4
 * @example search([1, 2, 3, 4, 5], 15) => -1
 *
 * @param {number[]} nums - Integer array
 * @param {number} target - Number to search for in `nums`
 * @return {number} Index of `target` if found, `-1` otherwise
 */
const search = (nums: number[], target: number): number => {
  // Base case 1: If nums is empty array, return -1
  if (nums.length === 0) return -1

  /** @const {number} index - Current index */
  const index: number = nums.length - 1

  // Base case 2: If target was found, return index
  // Otherwise, continue searching for index of target
  return nums[index] === target ? index : search(nums.slice(0, index), target)
}

export default search
