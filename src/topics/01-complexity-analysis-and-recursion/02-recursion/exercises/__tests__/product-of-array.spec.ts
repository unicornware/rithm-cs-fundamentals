/**
 * @file Unit Tests - productOfArray
 * @module csf/topics/1.2/exercises/tests/unit/productOfArray
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../product-of-array'

describe('unit:1.2/exercises/productOfArray', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    nums: number[]
  }

  const cases: Case[] = [
    { expected: -6, nums: [1, -2, 3] },
    { expected: 0, nums: [] },
    { expected: 0, nums: [0, 1, 2, 3] },
    { expected: 6, nums: [1, 2, 3] }
  ]

  cases.forEach(({ expected, nums }) => {
    it(`should return ${expected} given [${pf(nums, { min: true })}]`, () => {
      expect(testSubject(nums)).to.equal(expected)
    })
  })
})
