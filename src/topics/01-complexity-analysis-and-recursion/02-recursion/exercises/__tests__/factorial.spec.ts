/**
 * @file Unit Tests - factorial
 * @module csf/topics/recursion/exercises/tests/unit/factorial
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../factorial'

describe('unit:recursion/exercises/factorial', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { args: [0], expected: 1 },
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [3], expected: 6 },
    { args: [13], expected: 6_227_020_800 }
  ]

  cases.forEach(({ args, expected }) => {
    it(`should return ${expected} given ${pf(args, { min: true })}`, () => {
      expect(testSubject(...args)).to.equal(expected)
    })
  })
})
