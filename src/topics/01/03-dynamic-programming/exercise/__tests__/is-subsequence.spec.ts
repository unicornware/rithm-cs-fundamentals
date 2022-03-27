/**
 * @file Unit Tests - isSubsequence
 * @module csf/topics/dynamic-programming/exercise/tests/unit/isSubsequence
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-subsequence'

describe('unit:dynamic-programming/exercise/isSubsequence', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['aec', 'abcde'] },
    { expected: false, parameters: ['axc', 'ahbgdc'] },
    { expected: true, parameters: ['', ''] },
    { expected: true, parameters: ['', 'ahbgdc'] },
    { expected: true, parameters: ['ab', 'baab'] },
    { expected: true, parameters: ['abc', 'ahbgdc'] },
    { expected: true, parameters: ['ace', 'abcde'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
