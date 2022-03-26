/**
 * @file Unit Tests - productOfArray
 * @module csf/topics/recursion/exercises/tests/unit/productOfArray
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../product-of-array'

describe('unit:recursion/exercises/productOfArray', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { args: [[1, -2, 3]], expected: -6 },
    { args: [[]], expected: 0 },
    { args: [[0, 1, 2, 3]], expected: 0 },
    { args: [[1, 2, 3]], expected: 6 }
  ]

  cases.forEach(({ args, expected }) => {
    it(`should return ${expected} given ${pf(args, { min: true })}`, () => {
      expect(testSubject(...args)).to.equal(expected)
    })
  })
})
