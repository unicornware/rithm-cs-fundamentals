/**
 * @file Searching Algorithms Exercise - binarySearchRecursive
 * @module csf/topics/searching/exercise/binarySearchRecursive
 */

import binarySearch from '@csf/01/02-recursion/exercise/binary-search'

/**
 * Given a **sorted** integer array, `array`, the function returns the index of
 * `target`, if found. If not found, the function will return `-1`.
 *
 * @example binarySearchRecursive([1, 2], 11) => -1
 * @example binarySearchRecursive([1, 3, 4], 2) => -1
 * @example binarySearchRecursive([1, 2, 3, 4], 0) => -1
 * @example binarySearchRecursive([1, 2], 1) => 0
 * @example binarySearchRecursive([1, 2, 3, 4], 4) => 3
 * @example binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 6) => 5
 *
 * @param {number[]} array - Integer array
 * @param {number} value - Number to search for in `array`
 * @return {number} Index of `target` if found, `-1` otherwise
 */
const binarySearchRecursive = binarySearch

export default binarySearchRecursive
