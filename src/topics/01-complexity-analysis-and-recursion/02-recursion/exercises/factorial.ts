/**
 * @file Recursion Exercises - factorial
 * @module csf/topics/recursion/exercises/factorial
 */

/**
 * Given an integer, `n`, the function returns `n!`.
 *
 * @see https://codewars.com/kata/5694cb0ec554589633000036
 *
 * @example factorial(0) => 1
 * @example factorial(1) => 1
 * @example factorial(2) => 2
 * @example factorial(3) => 6
 * @example factorial(13) => 6227020800
 *
 * @param {number} n - Integer
 * @return {number} `n!`
 */
const factorial = (n: number): number => {
  // Base case: If n <= 1, return 1. Otherwise, return n * (n - 1)!
  return n <= 1 ? 1 : n * factorial(n - 1)
}

export default factorial
