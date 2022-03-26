/**
 * @file Unit Tests - contains
 * @module csf/topics/recursion/exercises/tests/unit/contains
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../contains'

describe('unit:recursion/exercises/contains', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [{}, 'data'] },
    {
      expected: false,
      parameters: [
        { data: { hello: 'world', people: ['john'], pets: {} }, foo: 2 },
        'foo'
      ]
    },
    {
      expected: true,
      parameters: [
        {
          data: {
            info: {
              stuff: {
                thing: {
                  moreStuff: {
                    magicNumber: 44
                  }
                }
              }
            }
          }
        },
        44
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = pf(parameters, { min: true })

    it(`should return ${expected} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
