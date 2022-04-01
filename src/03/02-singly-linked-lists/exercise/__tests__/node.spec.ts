/**
 * @file Unit Tests - Node
 * @module csf/topics/singly-linked-lists/exercise/tests/unit/Node
 */

import TestSubject from '../node'

describe('unit:singly-linked-lists/exercise/Node', () => {
  describe('constructor', () => {
    let val: string
    let subject: TestSubject<typeof val>

    before(function (this) {
      val = this.faker.animal.dog()
      subject = new TestSubject<typeof val>(val)
    })

    it('should set #next', () => {
      expect(subject.next).to.be.null
    })

    it('should set #val', () => {
      expect(subject.val).to.equal(val)
    })
  })

  describe('#toString', () => {
    it('should return string representation of node', function (this) {
      // Arrange
      const val: string = this.faker.datatype.hexaDecimal(6)
      const subject = new TestSubject<typeof val>(val)

      // Act + Expect
      expect(subject.toString()).to.equal(`{ next: null, val: "${val}" }`)
    })
  })
})
