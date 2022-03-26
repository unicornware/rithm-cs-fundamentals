/**
 * @file Recursion Exercises - search
 * @module csf/topics/recursion/exercises/search
 */

/**
 * Given an array of integers, `nums`, the function returns the index of `num`.
 *
 * If `num` is not found, `-1` will be returned.
 *
 * @example search([1, 2, 3, 4, 5], 5) => 4
 * @example search([1, 2, 3, 4, 5], 15) => -1
 *
 * @param {number[]} nums - Integer array
 * @param {number} num - Number to search for in `nums`
 * @return {number} Index of `num` if found, `-1` otherwise
 */
const search = (nums: number[], num: number): number => {
  // Base case 1: If nums is empty array, return -1
  if (nums.length === 0) return -1

  /** @const {number} index - Current index */
  const index: number = nums.length - 1

  // Base case 2: If num was found, return index. Otherwise, continue search
  return nums[index] === num ? index : search(nums.slice(0, index), num)
}

export default search
