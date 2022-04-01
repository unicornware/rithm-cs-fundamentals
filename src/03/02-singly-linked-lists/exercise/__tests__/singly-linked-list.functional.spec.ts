/**
 * @file Functional Tests - SinglyLinkedList
 * @module csf/topics/singly-linked-lists/exercise/tests/func/SinglyLinkedList
 */

import getNode from '@tests/utils/get-linked-list-node'
import seedLinkedList from '@tests/utils/seed-linked-list-single.util'
import TestSubject from '../singly-linked-list'

describe('functional:singly-linked-lists/exercise/SinglyLinkedList', () => {
  describe('#insert', () => {
    it('should clamp index if index < 0', function (this) {
      // Arrange
      const index = this.faker.datatype.number({ max: 0 })
      const subject = new TestSubject<number>()
      // @ts-expect-error property 'get' is protected
      const spy_get = this.sandbox.spy(subject, 'get')

      // Act
      // @ts-expect-error property 'insert' is protected
      subject.insert(index, this.faker.datatype.datetime().getTime())

      // Expect
      expect(spy_get).to.have.been.calledOnceWith(-1)
    })

    it('should clamp index if index > #length', function (this) {
      // Arrange
      const subject = new TestSubject<string>()
      const length = seedLinkedList(subject, ['departments']).length
      const index = this.faker.datatype.number({ min: length + 1 })
      // @ts-expect-error property 'get' is protected
      const spy_get = this.sandbox.spy(subject, 'get')

      // Act
      // @ts-expect-error property 'insert' is protected
      subject.insert(index, this.faker.commerce.department())

      // Expect
      expect(spy_get).to.have.been.calledOnceWith(length - 1)
    })

    it('should shift nodes to insert node at specified index', function (this) {
      // Arrange
      const val: string = this.faker.animal.lion()
      const seeds: typeof val[] = ['animals', this.faker.animal.bear()]
      const subject = new TestSubject<typeof seeds[0]>()
      const index = seedLinkedList(subject, seeds).length / 2

      // Act
      // @ts-expect-error property 'insert' is protected
      subject.insert(index, val)

      // Expect
      expect(getNode(subject, index)!.val).to.equal(val)
      expect(subject.head!.next!.val).to.equal(val)
    })

    it('should add new head node if index === 0', function (this) {
      // Arrange
      const val: string = this.faker.internet.email()
      const subject = new TestSubject<typeof val>()
      seedLinkedList(subject, ['emails'])

      // Act
      // @ts-expect-error property 'insert' is protected
      subject.insert(0, val)

      // Expect
      expect(subject.head!.val).to.equal(val)
    })

    it('should add new tail node if index === #length', function (this) {
      // Arrange
      const val: string = this.faker.internet.userName()
      const subject = new TestSubject<typeof val>()
      seedLinkedList(subject, ['usernames'])

      // Act
      // @ts-expect-error property 'insert' is protected
      subject.insert(subject.length, val)

      // Expect
      expect(subject.tail!.val).to.equal(val)
    })
  })

  describe('#pop', () => {
    it('should remove and replace tail node', function (this) {
      // Arrange
      const seeds: string[] = ['dates', this.faker.datatype.uuid()]
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)
      const length = subject.length
      const spy_remove = this.sandbox.spy(subject, 'remove')

      // Act
      subject.pop()

      // Expect
      expect(spy_remove).to.be.calledOnceWith(length - 1)
      expect(subject.tail!.val).to.equal(seeds[0])
    })
  })

  describe('#push', () => {
    it('should insert new tail node', function (this) {
      // Arrange
      const val: string = this.faker.datatype.hexaDecimal()
      const subject = seedLinkedList<typeof val>(new TestSubject(), ['colors'])
      const length = subject.length
      // @ts-expect-error property 'insert' is protected
      const spy_insert = this.sandbox.spy(subject, 'insert')

      // Act
      subject.push(val)

      // Expect
      expect(spy_insert).to.have.been.calledOnceWith(length, val)
      expect(subject.tail!.val).to.equal(val)
    })
  })

  describe('#remove', () => {
    it('should shift nodes to remove node at specified index', () => {
      const seeds: number[] = [1, 2, 3, 4, 5]
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)
      const index = Math.floor(subject.length / 2)
      const index_prev = index - 1

      // Act
      subject.remove(index)
      const prev = getNode(subject, index_prev)!

      // Expect
      expect(prev.val).to.equal(seeds[index_prev])
      expect(prev.next!.val).to.equal(seeds[index + 1])
    })

    it('should replace head node if index === 0', function (this) {
      // Arrange
      const seeds: string[] = [this.faker.internet.avatar(), 'avatars']
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)

      // Act
      subject.remove(0)

      // Expect
      expect(subject.head!.val).to.equal(seeds[1])
    })

    it('should replace tail node if index === #length - 1', function (this) {
      // Arrange
      const seeds: number[] = [this.faker.datatype.float()]
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)

      // Act
      subject.remove(subject.length - 1)

      // Expect
      expect(subject.tail).to.be.null
    })

    it('should not decrease #length if list is initially empty', () => {
      // Arrange
      const subject = new TestSubject<boolean>()

      // Act
      subject.remove(0)

      // Expect
      expect(subject.length).to.equal(0)
    })
  })

  describe('#shift', () => {
    it('should remove and replace head node', function (this) {
      // Arrange
      const seeds: string[] = ['bears', this.faker.animal.bear()]
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)
      const spy_remove = this.sandbox.spy(subject, 'remove')

      // Act
      subject.shift()

      // Expect
      expect(spy_remove).to.be.calledOnceWith(0)
      expect(subject.head!.val).to.equal(seeds[1])
    })
  })

  describe('#set', () => {
    it('should update node at specified index', function (this) {
      // Arrange
      const index: number = 1
      const val: string = this.faker.animal.fish()
      const seeds: typeof val[] = ['fishes', '']
      const subject = seedLinkedList<typeof val>(new TestSubject(), seeds)

      // Act
      subject.set(val, index)

      // Expect
      expect(getNode(subject, index)!.val).to.equal(val)
    })
  })

  describe('#unshift', () => {
    it('should insert new head node', function (this) {
      // Arrange
      const val: string = 'colors'
      const seeds: typeof val[] = [this.faker.datatype.hexaDecimal()]
      const subject = seedLinkedList<typeof seeds[0]>(new TestSubject(), seeds)
      // @ts-expect-error property 'insert' is protected
      const spy_insert = this.sandbox.spy(subject, 'insert')

      // Act
      subject.unshift(val)

      // Expect
      expect(spy_insert).to.have.been.calledOnceWith(0, val)
      expect(subject.head!.val).to.equal(val)
    })
  })
})
