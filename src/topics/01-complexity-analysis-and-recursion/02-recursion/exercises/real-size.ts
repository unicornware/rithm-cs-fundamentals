/**
 * @file Recursion Exercises - realSize
 * @module csf/topics/recursion/exercises/realSize
 */

import { OneOrMany } from '@flex-development/tutils'

/**
 * First argument passed to {@link realSize}.
 */
type Arrays = OneOrMany<OneOrMany<number[] | number>>[]

/**
 * Given a multi-dimensional integer array, `arrays`, the function returns the
 * total number of integers stored inside the array.
 *
 * @see https://codewars.com/kata/57f032307b45ef9c8f0001dd
 *
 * @example realSize([]) => 0
 * @example realSize([[]]) => 0
 * @example realSize([1, [1]]) => 2
 * @example realSize([1, [], 2, [], 3, []]) => 3
 * @example realSize([0, [1, [5, [4, 3], 1], 1]]) => 7
 * @example realSize([[5], 3], 0, 2, [], [4, [5, 6]]) => 7
 *
 * @param {Arrays} arrays - Multi-dimensional integer array
 * @return {number} Total number of integers in `arrays`
 */
const realSize = (arrays: Arrays): number => {
  // Base case: If arrays is empty, return 0
  if (arrays.length === 0) return arrays.length

  /** @const {Arrays[0]} item - First item in {@link arrays} */
  const item: Arrays[0] = arrays.shift()!

  // copy is a number => increase count by 1
  // copy is an array => do recursive call to get increase amount
  return realSize(arrays) + (typeof item === 'number' ? 1 : realSize(item))
}

export default realSize
