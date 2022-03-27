/**
 * @file Unit Tests - realSize
 * @module csf/topics/recursion/exercise/tests/unit/realSize
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../real-size'

describe('unit:recursion/exercise/realSize', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 0, parameters: [[[]]] },
    { expected: 2, parameters: [[1, [1]]] },
    { expected: 3, parameters: [[1, [], 2, [], 3, []]] },
    { expected: 7, parameters: [[0, [1, [5, [4, 3], 1], 1]]] },
    { expected: 7, parameters: [[[[5], 3], 0, 2, [], [4, [5, 6]]]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
