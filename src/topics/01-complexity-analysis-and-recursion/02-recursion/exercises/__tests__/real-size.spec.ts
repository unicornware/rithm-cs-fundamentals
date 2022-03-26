/**
 * @file Unit Tests - realSize
 * @module csf/topics/recursion/exercises/tests/unit/realSize
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../real-size'

describe('unit:recursion/exercises/realSize', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { args: [[]], expected: 0 },
    { args: [[[]]], expected: 0 },
    { args: [[1, [1]]], expected: 2 },
    { args: [[1, [], 2, [], 3, []]], expected: 3 },
    { args: [[0, [1, [5, [4, 3], 1], 1]]], expected: 7 },
    { args: [[[[5], 3], 0, 2, [], [4, [5, 6]]]], expected: 7 }
  ]

  cases.forEach(({ args, expected }) => {
    it(`should return ${expected} given ${pf(args, { min: true })}`, () => {
      expect(testSubject(...args)).to.equal(expected)
    })
  })
})
