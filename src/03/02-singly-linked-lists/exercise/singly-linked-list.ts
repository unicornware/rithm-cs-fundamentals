/**
 * @file Singly Linked Lists Exercise - SinglyLinkedList
 * @module csf/topics/singly-linked-lists/exercise/SinglyLinkedList
 */

import { OrNull } from '@flex-development/tutils'
import { ILinkedList } from '../interfaces'
import type { Val } from '../types'
import Node from './node'

/**
 * Object representing a singly linked list.
 *
 * @template T - {@link Node} value type
 *
 * @implements {ILinkedList<T>}
 */
class SinglyLinkedList<T extends Val = Val> implements ILinkedList<T> {
  /**
   * @public
   * @property {OrNull<Node<T>>} head - First node in list, if any
   */
  head: OrNull<Node<T>>

  /**
   * @public
   * @property {number} length - Total number of nodes in list
   */
  length: number

  /**
   * @public
   * @property {OrNull<Node<T>>} tail - Last node in list, if any
   */
  tail: OrNull<Node<T>>

  /**
   * Creates a new singly linked list.
   */
  constructor() {
    this.head = null
    this.length = 0
    this.tail = null
  }

  /**
   * Returns the node at `index`.
   *
   * If `index` is out of bounds, or the list is empty, `null` will be returned.
   *
   * @protected
   *
   * @param {number} index - Index of node to get
   * @return {OrNull<Node<T>>} Node at `index` or `null`
   */
  protected get(index: number): OrNull<Node<T>> {
    // If list is empty, or index is out of bounds, return null
    if (this.length === 0 || index < 0 || index >= this.length) return null

    /** @const {OrNull<Node<T>>} curr - Current node in list */
    let curr: OrNull<Node<T>> = this.head

    /** @const {number} i - Index of {@link curr} */
    let i: number = 0

    // Find node at index
    while (i <= index) {
      // If at specified index, stop loop to return current node
      if (i === index) break

      // Move onto next node
      curr = curr!.next as Node<T>
      i++
    }

    return curr
  }

  /**
   * Inserts a node at `index`.
   *
   * @protected
   *
   * @param {number} index - Index to insert node
   * @param {T} val - Node value
   * @return {number} New list length
   */
  protected insert(index: number, val: T): number {
    /** @const {Node<T>} node - Node to add */
    const node = new Node<T>(val)

    // If index is less than 0, clamp index to 0
    if (index < 0) index = 0

    // If index is greater than list length, clamp to list length
    if (index > this.length) index = this.length

    /** @const {OrNull<Node<T>>} prev - Ref to node before {@link index} */
    const prev: OrNull<Node<T>> = this.get(index - 1)

    // If previous node => set previous node's next node and node's next node
    // If no previous => inserting new head node
    if (prev) {
      node.next = prev.next
      prev.next = node
    } else {
      node.next = this.head
      this.head = node
    }

    // If pushing new node, reassign tail
    if (index === this.length) this.tail = node

    // Increase list length and return new list length
    return ++this.length
  }

  /**
   * Removes the node at the end of the list and returns it.
   *
   * @public
   *
   * @return {OrNull<Node<T>>} Last node in list, or `null` if list is empty
   */
  pop(): OrNull<Node<T>> {
    // Remove and return last node in list and decrease list length
    return this.remove(this.length - 1)
  }

  /**
   * Adds a node to the end of the list.
   *
   * @public
   *
   * @param {T} val - Value of node to add
   * @return {this} Current list
   */
  push(val: T): this {
    // Insert new node at end of list and increase list length
    this.insert(this.length, val)

    // Return updated list
    return this
  }

  /**
   * Removes the node at `index`.
   *
   * @public
   *
   * @param {number} index - Index of node to remove
   * @return {OrNull<Node<T>>} The removed node or `null`
   */
  remove(index: number): OrNull<Node<T>> {
    /** @const {OrNull<Node<T>>} node - Reference to removed node */
    const node: OrNull<Node<T>> = this.get(index)

    // If node doesn't exist, do nothing
    if (node === null) return node

    /** @const {OrNull<Node<T>>} prev - Reference to node before {@link node} */
    const prev: OrNull<Node<T>> = this.get(index - 1)

    // If previous node => reassign the previous node's next node
    // If no previous node => removing head node; shift head
    if (prev) prev.next = node.next
    else this.head = node.next as OrNull<Node<T>>

    // Reassign tail node if removing tail
    if (index === this.length - 1) {
      this.tail = this.get(this.length - 2)
      if (this.tail) this.tail.next = null
    }

    // Decrease list length
    if (this.length > 0) this.length--

    return node
  }

  /**
   * Reverses the nodes in the list.
   *
   * @public
   *
   * @return {SinglyLinkedList<T>} Reversed list
   */
  reverse(): SinglyLinkedList<T> {
    /** @const {SinglyLinkedList<T>} list - Reversed list */
    const list = new SinglyLinkedList<T>()

    /** @const {OrNull<Node<T>>} curr - Node in current list */
    let curr: OrNull<Node<T>> = this.head

    // Starting from the head node, unshift nodes into reversed list
    while (curr) {
      // Add node to reversed list
      list.unshift(curr.val)

      // Move onto next node in current list
      curr = curr.next as Node<T>
    }

    return list
  }

  /**
   * Updates the node at `index`.
   *
   * @param {T} val - New node value
   * @param {number} index - Index of node to update
   * @return {boolean} `true` if node was updated, `false` otherwise
   */
  set(val: T, index: number): boolean {
    /** @const {OrNull<Node<T>>} node - Reference to node at {@link index} */
    const node = this.get(index)

    // If node doesn't exist, return false
    if (node === null) return false

    // Update node value
    // Note: Since node is a reference, we can update the node reference AND
    // the actual list node without iterating through the entire list again
    node.val = val

    return true
  }

  /**
   * Removes the node at the beginning of the list and returns it.
   *
   * @public
   *
   * @return {OrNull<Node<T>>} First node in list, or `null` if list is empty
   */
  shift(): OrNull<Node<T>> {
    // Remove and return first node and decrease list length
    return this.remove(0)
  }

  /**
   * Adds a node to the beginning of the list.
   *
   * @public
   *
   * @param {T} val - Value of node to add
   * @return {this} Current list
   */
  unshift(val: T): this {
    // Insert new node at beginning of list and increase list length
    this.insert(0, val)

    return this
  }
}

export default SinglyLinkedList
