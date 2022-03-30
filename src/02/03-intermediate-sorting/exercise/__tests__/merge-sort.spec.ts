/**
 * @file Unit Tests - mergeSort
 * @module csf/topics/searching/exercise/tests/unit/mergeSort
 */

import ARRAY_EMPTY from '@fixtures/array-empty.fixture'
import ARRAY_ONE_ITEM from '@fixtures/array-one-item.fixture'
import NUMS_SORTED_NEG from '@fixtures/nums-sorted-neg.fixture'
import NUMS_SORTED from '@fixtures/nums-sorted.fixture'
import NUMS_UNSORTED_NEG from '@fixtures/nums-unsorted-neg.fixture'
import NUMS_UNSORTED from '@fixtures/nums-unsorted.fixture'
import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { merge as testSubjectH } from '../merge-sort'

describe('unit:searching/exercise/mergeSort', () => {
  describe('@returns', () => {
    interface Case extends TestcaseFn<typeof testSubject> {}

    const cases: Case[] = [
      { expected: ARRAY_EMPTY, parameters: [ARRAY_EMPTY] },
      { expected: ARRAY_ONE_ITEM, parameters: [ARRAY_ONE_ITEM] },
      { expected: NUMS_SORTED, parameters: [NUMS_UNSORTED] },
      { expected: NUMS_SORTED_NEG, parameters: [NUMS_UNSORTED_NEG] }
    ]

    cases.forEach(({ expected, parameters }) => {
      const args = pf(parameters, { min: true })
      const returns = pf(expected, { min: true })

      it(`should return ${returns} given ${args}`, () => {
        expect(testSubject(...parameters)).to.have.ordered.members(expected)
      })
    })
  })

  describe('helper method', () => {
    interface Case extends TestcaseFn<typeof testSubjectH> {}

    const cases: Case[] = [
      { expected: [], parameters: [[], []] },
      { expected: [1], parameters: [[1], []] },
      { expected: [3], parameters: [[], [3]] },
      {
        expected: [-15.75, -2.3, 3, 3.1, 7.4, 11.25, 13],
        parameters: [
          [-15.75, 3.1, 13],
          [-2.3, 3, 7.4, 11.25]
        ]
      },
      {
        expected: [-5, 0, 1, 2, 2, 6],
        parameters: [
          [-5, 2],
          [0, 1, 2, 6]
        ]
      },
      {
        expected: [-2, 1, 3, 4, 5, 6, 7, 8],
        parameters: [
          [1, 3, 5, 7],
          [-2, 4, 6, 8]
        ]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      const args = pf(parameters, { min: true })
      const returns = pf(expected, { min: true })

      it(`should return ${returns} given ${args}`, () => {
        expect(testSubjectH(...parameters)).to.have.ordered.members(expected)
      })
    })
  })
})
