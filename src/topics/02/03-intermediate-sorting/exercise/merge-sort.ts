/**
 * @file Intermediate Sorting Algorithms Exercise - mergeSort
 * @module csf/topics/intermediate-sorting/exercise/mergeSort
 */

/**
 * Merges two **sorted** arrays together to form one sorted array.
 *
 * @example merge([-5, 2], [0, 1, 2, 6]) => [-5, 0, 1, 2, 2, 6]
 * @example merge([1, 3, 5, 7], [-2, 4, 6, 8]) => [-2, 1, 3, 4, 5, 6, 7, 8]
 *
 * @param {number[]} arr1 - First sorted (ascending) array
 * @param {number[]} arr2 - Second sorted (ascending) array
 * @return {number[]} Merged sorted array
 */
const merge = (arr1: number[], arr2: number[]): number[] => {
  // If both arrays are empty, do nothing
  if (arr1.length === 0 && arr2.length === 0) return []

  // If one array is empty, return non-empty array
  if (arr1.length === 0 && arr2.length > arr1.length) return arr2
  if (arr2.length === 0 && arr1.length > arr2.length) return arr1

  /** @const {number[]} arr - Merged sorted array */
  const arr: number[] = []

  /** @const {number} i - Current index in {@link arr1} */
  let i: number = 0

  /** @const {number} j - Current index in {@link arr2} */
  let j: number = 0

  /** @const {number} k - Current index in {@link arr} */
  let k: number = 0

  // Merge arrays
  while (i < arr1.length && j < arr2.length) {
    /** @const {number} item1 - Array item in {@link arr1} */
    const item1: number = arr1[i]!

    /** @const {number} item2 - Array item in {@link arr2} */
    const item2: number = arr2[j]!

    // If item1 is less than or equal to item2, set item1 before item2
    // Otherwise, set item2 before item1
    if (item1 <= item2) {
      arr[k] = item1
      i++
    } else {
      arr[k] = item2
      j++
    }

    // Increase merged index
    k++
  }

  // Copy remaining elements of arr1, if any
  while (i < arr1.length) {
    arr[k] = arr1[i]!
    i++
    k++
  }

  // Copy remaining elements of arr2, if any
  while (j < arr2.length) {
    arr[k] = arr2[j]!
    j++
    k++
  }

  // Return merged sorted array
  return arr
}

/**
 * Given an array of integers, `nums`, the function sorts the values in the
 * array using merge sort.
 *
 * @example mergeSort([4, 5, 1, 21, 2, 9]) => [1, 2, 4, 5, 9, 21]
 * @example mergeSort([9, -2 , 0, 35, 4, -10]) => [-10, -2, 0, 4, 9, 35]
 *
 * @param {number[]} nums - Integer array
 * @return {number[]} Sorted array
 */
const mergeSort = (nums: number[]): number[] => {
  // Base case: If nums is empty or has one item, do nothing
  if (nums.length <= 1) return nums

  /** @const {number} m - Index of midpoint in {@link nums} */
  const m: number = Math.floor(nums.length / 2)

  // Sort smaller and smaller sub arrays, then return one sorted, merged array
  return merge(mergeSort(nums.slice(0, m)), mergeSort(nums.slice(m)))
}

export { merge, mergeSort as default }
