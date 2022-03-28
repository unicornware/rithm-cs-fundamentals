/**
 * @file Unit Tests - selectionSort
 * @module csf/topics/searching/exercise/tests/unit/selectionSort
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../selection-sort'

describe('unit:searching/exercise/selectionSort', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [[]] },
    { expected: [13], parameters: [[13]] },
    {
      expected: [1, 2, 4, 5, 9, 10, 15, 21],
      parameters: [[4, 5, 1, 21, 2, 9, 10, 15]]
    },
    {
      expected: [-10, -2, 0, 4, 9, 12, 22, 35],
      parameters: [[9, -2, 0, 35, 4, -10, 22, 12]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })
    const returns = pf(expected, { min: true })

    it(`should return ${returns} given ${args}`, () => {
      expect(testSubject(...parameters)).to.have.ordered.members(expected)
    })
  })
})
