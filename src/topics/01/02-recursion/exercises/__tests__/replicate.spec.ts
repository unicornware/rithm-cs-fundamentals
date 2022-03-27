/**
 * @file Unit Tests - replicate
 * @module csf/topics/recursion/exercises/tests/unit/replicate
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../replicate'

describe('unit:recursion/exercises/replicate', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [-5, 3] },
    { expected: [], parameters: [0, 2] },
    { expected: Array.from<number>({ length: 2 }).fill(0), parameters: [2, 0] },
    { expected: Array.from<number>({ length: 3 }).fill(5), parameters: [3, 5] }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })
    const returns = pf(expected, { min: true })

    it(`should return ${returns} given ${args}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
