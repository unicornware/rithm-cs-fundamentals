/**
 * @file Singly Linked Lists Exercise - Node
 * @module csf/topics/singly-linked-lists/exercise/Node
 */

import { OrNull } from '@flex-development/tutils'
import { format as pf } from 'pretty-format'
import { INode } from '../interfaces'
import type { Val } from '../types'

/**
 * Object representing a `SinglyLinkedList` node.
 *
 * @template T - Value type
 *
 * @implements {INode<T>}
 */
class Node<T extends Val = Val> implements INode<T> {
  /**
   * @public
   * @property {OrNull<Node>} next - Next node, if any
   */
  next: OrNull<Node>

  /**
   * @public
   * @property {T} val - Node value
   */
  val: T

  /**
   * Creates a new `SinglyLinkedList` node.
   *
   * @param {T} val - Node value
   * @param {OrNull<Node>} [next=null] - Next node, if any
   */
  constructor(val: T, next: OrNull<Node> = null) {
    this.val = val
    this.next = next
  }

  /**
   * Returns a string representation of the node.
   *
   * @public
   *
   * @return {string} String representation of node
   */
  toString(): string {
    return `{ next: ${this.next?.toString() ?? null}, val: ${pf(this.val)} }`
  }
}

export default Node
