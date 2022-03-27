/**
 * @file Unit Tests - linearSearch
 * @module csf/topics/searching/exercises/tests/unit/linearSearch
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../linear-search'

describe('unit:searching/exercises/linearSearch', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: -1, parameters: [[], 13] },
    { expected: -1, parameters: [[1, 2], 11] },
    { expected: -1, parameters: [[1, 3, 4], 2] },
    { expected: -1, parameters: [[1, 2, 3, 4], 0] },
    { expected: 0, parameters: [[1, 2], 1] },
    { expected: 3, parameters: [[1, 2, 3, 4], 4] },
    { expected: 5, parameters: [[1, 2, 3, 4, 5, 6, 7], 6] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
