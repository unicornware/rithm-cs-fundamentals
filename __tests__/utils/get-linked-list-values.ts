/**
 * @file Test Utilities - getLinkedListValues
 * @module tests/utils/getLinkedListValues
 */

import type Node from '@csf/03/02-singly-linked-lists/exercise/node'
import { ILinkedList } from '@csf/03/02-singly-linked-lists/interfaces'
import type { Val } from '@csf/03/02-singly-linked-lists/types'
import { OrNull } from '@flex-development/tutils'

/**
 * Returns an array containing all {@link Node} values in `list`.
 *
 * @template T - `Node` value type
 *
 * @param {ILinkedList<T>} list - Linked list
 * @return {T[]} `Node` values
 */
function getLinkedListValues<T extends Val = Val>(list: ILinkedList<T>): T[] {
  /** @const {T[]} values - {@link list} node nodes */
  const values: T[] = []

  /** @const {OrNull<Node<T>>} curr - Current node in {@link list} */
  let curr: OrNull<Node<T>> = list.head

  // Get nodes
  while (curr) {
    // Add node value to values array
    values.push(curr.val)

    // Move onto next node
    curr = curr.next as Node<T>
  }

  return values
}

export default getLinkedListValues
