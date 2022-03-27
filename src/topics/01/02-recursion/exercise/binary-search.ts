/**
 * @file Recursion Exercise - binarySearch
 * @module csf/topics/recursion/exercise/binarySearch
 */

/**
 * Given a **sorted** integer array, `nums`, the function returns the index of
 * `target`, if found. If not found, the function will return `-1`.
 *
 * @example binarySearch([1, 2, 3, 4, 5], 5) => 4
 * @example binarySearch([1, 2, 3, 4, 5], 15) => -1
 *
 * @param {number[]} nums - Sorted integer array
 * @param {number} target - Number to search for in `nums`
 * @return {number} Index of `target` if found, `-1` otherwise
 */
const binarySearch = (nums: number[], target: number): number => {
  // Base case 1: If nums is empty array, return -1
  if (nums.length === 0) return -1

  /** @const {number} m - Index of midpoint in {@link nums} */
  let m: number = Math.floor(nums.length / 2)

  // Base case 2: Return index of midpoint if target is at midpoint
  if (nums[m] === target) return m

  /** @const {boolean} $lt - Search interval check */
  const $lt: boolean = target < nums[m]!

  // If target < midpoint, narrow search interval to lower half of nums
  // Otherwise, narrow search interval to upper half of nums.
  // Note: ++m removes nums[m] from the new interval and allows the new value of
  // m to be used later in return statement (to account for interval narrowing)
  nums = $lt ? nums.slice(0, m) : nums.slice(++m)

  /**
   * To continue searching for the index of target, we do a recursive call and
   * pass in the new search interval.
   *
   * @const {number} index - Possible index of target
   */
  const index: number = binarySearch(nums, target)

  // If target wasn't found, return index
  // Otherwise, account for interval narrowing before returning index
  return index === -1 ? index : index + ($lt ? 0 : m)
}

export default binarySearch
