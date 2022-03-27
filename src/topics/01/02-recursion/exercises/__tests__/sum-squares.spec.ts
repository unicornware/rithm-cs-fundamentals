/**
 * @file Unit Tests - SumSquares
 * @module csf/topics/recursion/exercises/tests/unit/SumSquares
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../sum-squares'

describe('unit:recursion/exercises/SumSquares', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 0, parameters: [[[]]] },
    { expected: 14, parameters: [[1, 2, 3]] },
    { expected: 14, parameters: [[[1, 2], 3]] },
    { expected: 1, parameters: [[[[[[[[[[1]]]]]]]]]] },
    { expected: 400, parameters: [[10, [[10], 10], [10]]] },
    {
      expected: 325,
      parameters: [[1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
