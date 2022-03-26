/**
 * @file Unit Tests - contains
 * @module csf/topics/recursion/exercises/tests/unit/contains
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../contains'

describe('unit:recursion/exercises/contains', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { args: [{}, 'data'], expected: false },
    {
      args: [
        { data: { hello: 'world', people: ['john'], pets: {} }, foo: 2 },
        'foo'
      ],
      expected: false
    },
    {
      args: [
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
      ],
      expected: true
    }
  ]

  cases.forEach(({ args, expected }) => {
    it(`should return ${expected} given ${pf(args, { min: true })}`, () => {
      expect(testSubject(...args)).to.equal(expected)
    })
  })
})
