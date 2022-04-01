/**
 * @file Unit Tests - SinglyLinkedList
 * @module csf/topics/singly-linked-lists/exercise/tests/unit/SinglyLinkedList
 */

import NUM_RANDOM from '@fixtures/num-random.fixture'
import type { Testcase, TestcaseFn } from '@tests/interfaces'
import getValues from '@tests/utils/get-linked-list-values'
import seedLinkedList from '@tests/utils/seed-linked-list-single.util'
import TestSubject from '../singly-linked-list'

describe('unit:singly-linked-lists/exercise/SinglyLinkedList', () => {
  describe('constructor', () => {
    let subject: TestSubject

    before(() => {
      subject = new TestSubject()
    })

    it('should set #head', () => {
      expect(subject.head).to.be.null
    })

    it('should set #length', () => {
      expect(subject.length).to.equal(0)
    })

    it('should set #tail', () => {
      expect(subject.tail).to.be.null
    })
  })

  describe('#get', () => {
    type V = string

    interface Case extends Omit<TestcaseFn<TestSubject<V>['get']>, 'expected'> {
      expected: V | null
      returns: string
      seeds: V[]
      state: string
    }

    const cases: Case[] = [
      {
        expected: null,
        parameters: [0],
        returns: 'string',
        seeds: [],
        state: 'list is empty'
      },
      {
        expected: null,
        parameters: [-1],
        returns: 'null',
        seeds: [faker.animal.type()],
        state: 'index is less than 0'
      },
      {
        expected: null,
        parameters: [2],
        returns: 'null',
        seeds: [faker.animal.bear()],
        state: 'index is greater than or equal to #length'
      },
      {
        expected: 'dog',
        parameters: [1],
        returns: 'node at specified index',
        seeds: [faker.animal.dog(), 'dog', faker.animal.dog(), 'dog'],
        state: 'index is valid and list is not empty'
      }
    ]

    cases.forEach(({ expected, parameters, returns, seeds, state }) => {
      it(`should return ${returns} if ${state}`, () => {
        // Arrange
        const subject = new TestSubject<V>()
        seedLinkedList<V>(subject, seeds)

        // Act + Expect
        // @ts-expect-error property 'get' is protected
        expect(subject.get(...parameters)?.val ?? null).to.equal(expected)
      })
    })
  })

  describe('#insert', () => {
    type V = number

    interface Case extends TestcaseFn<TestSubject<V>['insert']> {
      state: string
    }

    const cases: Case[] = [
      {
        expected: 1,
        parameters: [
          faker.datatype.number({ max: -1 }),
          faker.datatype.number()
        ],
        state: 'index is less than 0'
      },
      {
        expected: 1,
        parameters: [
          faker.datatype.number({ max: 10, min: 1 }),
          faker.datatype.number()
        ],
        state: 'index is greater than #length'
      },
      {
        expected: 1,
        parameters: [0, faker.datatype.number()],
        state: 'index is valid'
      }
    ]

    cases.forEach(({ expected, parameters, state }) => {
      it(`should return new list length if ${state}`, () => {
        // @ts-expect-error property 'insert' is protected
        expect(new TestSubject<V>().insert(...parameters)).to.equal(expected)
      })
    })
  })

  describe('#pop', () => {
    type V = number

    interface Case extends Testcase<V | null> {
      parameters: Parameters<TestSubject<V>['pop']>
      returns: string
      seeds: V[]
      state: 'empty' | 'not empty'
    }

    const cases: Case[] = [
      {
        expected: null,
        parameters: [],
        returns: 'null',
        seeds: [],
        state: 'empty'
      },
      {
        expected: NUM_RANDOM,
        parameters: [],
        returns: 'tail node',
        seeds: [NUM_RANDOM],
        state: 'not empty'
      }
    ]

    cases.forEach(({ expected, returns, seeds, state }) => {
      it(`should return ${returns} if list is ${state}`, () => {
        // Arrange
        const subject = seedLinkedList<V>(new TestSubject(), seeds)

        // Act + Expect
        expect(subject.pop()?.val ?? null).to.equal(expected)
      })
    })
  })

  describe('#push', () => {
    it('should return updated list', () => {
      expect(new TestSubject<number>().push(0)).to.be.instanceof(TestSubject)
    })
  })

  describe('#remove', () => {
    type V = number

    interface Case extends Testcase<V | null> {
      parameters: Parameters<TestSubject<V>['remove']>
      returns: string
      seeds: number[]
      state: string
    }

    const cases: Case[] = [
      {
        expected: null,
        parameters: [0],
        returns: 'null',
        seeds: [],
        state: 'list is empty'
      },
      {
        expected: null,
        parameters: [-1],
        returns: 'null',
        seeds: [faker.datatype.number()],
        state: 'index is less than zero'
      },
      {
        expected: null,
        parameters: [faker.datatype.number({ min: 2 })],
        returns: 'null',
        seeds: [faker.datatype.number(), faker.datatype.number()],
        state: 'index is greater than or equal to #length'
      }
    ]

    cases.forEach(({ expected, parameters, seeds, state }) => {
      it(`should return ${expected} if ${state}`, () => {
        // Arrange
        const subject = seedLinkedList<V>(new TestSubject(), seeds)

        // Act + Expect
        expect(subject.remove(...parameters)?.val ?? null).to.equal(expected)
      })
    })
  })

  describe('#reverse', () => {
    it('should return reversed list', () => {
      // Arrange
      const seeds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)

      // Act
      const result = subject.reverse()

      // Expect
      expect(result).to.be.instanceof(TestSubject)
      expect(getValues(result)).to.have.ordered.members(seeds.reverse())
    })
  })

  describe('#set', () => {
    type V = string

    interface Case extends TestcaseFn<TestSubject<V>['set']> {
      seeds: V[]
      state: 'does not exist' | 'exists'
    }

    const cases: Case[] = [
      {
        expected: false,
        parameters: [faker.company.bs(), 0],
        seeds: [],
        state: 'does not exist'
      },
      {
        expected: true,
        parameters: [faker.datatype.datetime().toISOString(), 1],
        seeds: ['dates', ''],
        state: 'exists'
      }
    ]

    cases.forEach(({ expected, parameters, seeds, state: s }) => {
      it(`should return ${expected} if node at specified index ${s}}`, () => {
        // Arrange
        const subject = seedLinkedList<V>(new TestSubject(), seeds)

        // Act + Expect
        expect(subject.set(...parameters)).to.equal(expected)
      })
    })
  })

  describe('#shift', () => {
    type V = string

    interface Case extends Testcase<V | null> {
      parameters: Parameters<TestSubject<V>['shift']>
      seeds: V[]
      state: 'empty' | 'not empty'
      returns: string
    }

    const cases: Case[] = [
      {
        expected: null,
        parameters: [],
        returns: 'null',
        seeds: [],
        state: 'empty'
      },
      {
        expected: 'cats',
        parameters: [],
        returns: 'head node',
        seeds: ['cats', faker.animal.cat()],
        state: 'not empty'
      }
    ]

    cases.forEach(({ expected, returns, seeds, state }) => {
      it(`should return ${returns} if list is ${state}`, () => {
        // Arrange
        const subject = seedLinkedList<V>(new TestSubject(), seeds)

        // Act + Expect
        expect(subject.shift()?.val ?? null).to.equal(expected)
      })
    })
  })

  describe('#unshift', () => {
    it('should return updated list', () => {
      expect(new TestSubject<number>().unshift(2)).to.be.instanceof(TestSubject)
    })
  })
})
