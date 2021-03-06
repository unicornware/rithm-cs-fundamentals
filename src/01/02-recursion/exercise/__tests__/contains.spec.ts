/**
 * @file Unit Tests - contains
 * @module csf/topics/recursion/exercise/tests/unit/contains
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../contains'

describe('unit:recursion/exercise/contains', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [{}, 'data'] },
    {
      expected: false,
      parameters: [
        { data: { eggs: 'fried', guests: {}, people: ['john'] }, total: 1 },
        'total'
      ]
    },
    {
      expected: false,
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
