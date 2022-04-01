/**
 * @file Singly Linked Lists Interfaces - INode
 * @module csf/topics/singly-linked-lists/interfaces/INode
 */

import type { OrNull } from '@flex-development/tutils'
import type Val from '../types/val.type'

/**
 * Object representing a linked list node.
 *
 * @template T - Value type
 */
interface INode<T extends Val = Val> {
  next: OrNull<INode>
  prev?: OrNull<INode>
  val: T

  toString(): string
}

export default INode
