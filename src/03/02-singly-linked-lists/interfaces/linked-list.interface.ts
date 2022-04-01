/**
 * @file Singly Linked Lists Interfaces - ILinkedList
 * @module csf/topics/singly-linked-lists/interfaces/ILinkedList
 */

import type { OrNull } from '@flex-development/tutils'
import type Val from '../types/val.type'
import type INode from './node.interface'

/**
 * Object representing a linked list.
 *
 * @template T - {@link INode} value type
 */
interface ILinkedList<T extends Val = Val> {
  head: OrNull<INode<T>>
  length: number
  tail?: OrNull<INode<T>>

  pop(): OrNull<INode<T>>
  push(val: T): this
  remove(index: number): OrNull<INode<T>>
  reverse(): ILinkedList<T>
  set(val: T, index: number): boolean
  shift(): OrNull<INode<T>>
  unshift(val: T): this
}

export default ILinkedList
