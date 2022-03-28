/**
 * @file Unit Tests - bubbleSort
 * @module csf/topics/searching/exercise/tests/unit/bubbleSort
 */

import ARRAY_EMPTY from '@fixtures/array-empty.fixture'
import ARRAY_ONE_ITEM from '@fixtures/array-one-item.fixture'
import NUMS_SORTED_NEG from '@fixtures/nums-sorted-neg.fixture'
import NUMS_SORTED from '@fixtures/nums-sorted.fixture'
import NUMS_UNSORTED_NEG from '@fixtures/nums-unsorted-neg.fixture'
import NUMS_UNSORTED from '@fixtures/nums-unsorted.fixture'
import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../bubble-sort'

describe('unit:searching/exercise/bubbleSort', () => {
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
