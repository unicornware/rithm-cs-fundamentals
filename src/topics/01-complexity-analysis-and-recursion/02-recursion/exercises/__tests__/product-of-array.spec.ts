/**
 * @file Unit Tests - productOfArray
 * @module csf/topics/recursion/exercises/tests/unit/productOfArray
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../product-of-array'

describe('unit:recursion/exercises/productOfArray', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: -6, parameters: [[1, -2, 3]] },
    { expected: 0, parameters: [[]] },
    { expected: 0, parameters: [[0, 1, 2, 3]] },
    { expected: 6, parameters: [[1, 2, 3]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
