/**
 * @file Recursion Exercise - SumSquares
 * @module csf/topics/recursion/exercise/SumSquares
 */

import type { OneOrMany } from '@flex-development/tutils'

/**
 * First argument passed to {@link SumSquares}.
 */
type List = OneOrMany<
  OneOrMany<
    | number[]
    | OneOrMany<
        | number[]
        | OneOrMany<
            | number[]
            | OneOrMany<
                | number[]
                | OneOrMany<
                    | number[]
                    | OneOrMany<number[] | OneOrMany<number[] | number>>
                  >
              >
          >
      >
  >
>[]

/**
 * Given a multi-dimensional list of integers, `l`, the function squares all
 * values in `list` and returns the sum.
 *
 * @see https://codewars.com/kata/57882daf90b2f375280000ad
 *
 * @example SumSquares([]) => 0
 * @example SumSquares([[]]) => 0
 * @example SumSquares([1, 2, 3]) => 14
 * @example SumSquares([[1, 2], 3]) => 14
 * @example SumSquares([[[[[[[[[1]]]]]]]]]) => 1
 * @example SumSquares([10, [[10], 10], [10]]) => 400
 * @example SumSquares([1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]]) => 325
 *
 * @param {List} l - Multi-dimensional integer list
 * @return {number} Sum of squares in `list`
 */
const SumSquares = (l: List): number => {
  // Base case: If arrays is empty, return 0
  if (l.length === 0) return l.length

  /** @const {List} copies - Copy of {@link l} */
  let copies: typeof l = [...l]

  /** @const {List[0]} c - First item in {@link copies} */
  const c: List[0] = copies.shift()!

  // copy is a number => increase count by i ** i
  // copy is an array => do recursive call to get increase amount
  return SumSquares(copies) + (typeof c === 'number' ? c ** 2 : SumSquares(c))
}

export default SumSquares
