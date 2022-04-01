/**
 * @file Test Utilities - seedSinglyLinkedList
 * @module tests/utils/seedSinglyLinkedList
 */

import Node from '@csf/03/02-singly-linked-lists/exercise/node'
import { ILinkedList } from '@csf/03/02-singly-linked-lists/interfaces'
import type { Val } from '@csf/03/02-singly-linked-lists/types'

/**
 * Adds nodes to a singly linked list.
 *
 * @template T - {@link Node} value type
 *
 * @param {ILinkedList<T>} list - List to add nodes to
 * @param {T[]} [values=[]] - Node values
 * @return {ILinkedList} Updated `list`
 */
function seedSinglyLinkedList<T extends Val = Val>(
  list: ILinkedList<T>,
  values: T[] = []
): typeof list {
  /** @const {Node<T>[]} nodes - {@link list} nodes */
  const nodes = values.map(val => new Node<T>(val))

  // Set head and tail nodes + link nodes together
  for (const [index, node] of nodes.entries()) {
    // Set next node, if any
    node.next = nodes[index + 1] ?? null

    // Set head node
    if (index === 0) list.head = node

    // Set tail node
    if (index === nodes.length - 1) {
      list.tail = index === 0 ? (list.head = node) : node
    }
  }

  // Set list length
  list.length = nodes.length

  return list
}

export default seedSinglyLinkedList
