/**
 * @file Dynamic Programming Exercises - isSubsequence
 * @module csf/topics/dynamic-programming/exercises/isSubsequence
 */

/**
 * Given two strings `s` and `t`, the function returns `true` if `s` is a
 * subsequence of `t`, or `false` otherwise.
 *
 * @see https://leetcode.com/problems/is-subsequence
 *
 *
 * @example isSubsequence('ace', 'abcde') => true
 * @example isSubsequence('aec', 'abcde') => false
 * @example isSubsequence('abc', 'ahbgdc') => true
 * @example isSubsequence('axc', 'ahbgdc') => false
 *
 * @param {string} s - Possible subsequence
 * @param {string} t - String to check
 * @return {boolean} `true` if `s` is a subsequnece of `t`, `false` otherwise
 */
const isSubsequence = (s: string, t: string): boolean => {
  // If strings are equal or s is an empty string, return true
  if (s === t || (s.length === 0 && t.length > s.length)) return true

  /**
   * Tabulation Method: The "bottom down" approach is used to initialize an
   * array with all characters required to qualify `s` as a subsequence of `t`.
   *
   * @const {string[]} characters - Subsequence characters
   */
  const characters: string[] = [...s]

  // Determine common characters between `s` and `t`
  for (let i = 0; i < t.length; i++) {
    /** @const {string} char - A single character in `t` */
    const char: string = t.charAt(i)

    // If char is not a character in s, do nothing
    if (!s.includes(char)) continue

    // If subsequence includes char, narrow subsequence search interval
    if (char === characters[0]) characters.shift()

    // If there aren't anymore common characters to find, stop searching
    if (characters.length === 0) return true
  }

  return false
}

export default isSubsequence
