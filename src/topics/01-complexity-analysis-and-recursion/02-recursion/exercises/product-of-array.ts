/**
 * @file Recursion Exercises - productOfArray
 * @module csf/topics/1.2/exercises/productOfArray
 */

/**
 * Given an array of integers, `nums`, the function returns the product of all
 * values in `nums`.
 *
 * @example productOfArray([1, 2, 3]) => 6
 * @example productOfArray([0, 1, 2, 3]) => 0
 * @example productOfArray([1, -2, 3]) => -6
 * @example productOfArray([]) => 0
 *
 * @param {number[]} nums - Integer array
 * @return {number} Product of integers in `nums`
 */
const productOfArray = (nums: number[]): number => {
  // Base case 1: If nums is empty array, return 0
  if (nums.length === 0) return 0

  // Base case 2: If nums has one integer, return first integer
  if (nums.length === 1) return nums[0]!

  // Multiply first integer by remaining integers in nums
  return nums.shift()! * productOfArray(nums)
}

export default productOfArray
