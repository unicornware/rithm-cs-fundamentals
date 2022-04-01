/**
 * @file Test Utilities - getLinkedListNode
 * @module tests/utils/getLinkedListNode
 */

import Node from '@csf/03/02-singly-linked-lists/exercise/node'
import { ILinkedList } from '@csf/03/02-singly-linked-lists/interfaces'
import type { Val } from '@csf/03/02-singly-linked-lists/types'
import { OrNull } from '@flex-development/tutils'

/**
 * Returns the `list` node at `index`.
 *
 * @template T - {@link Node} value type
 *
 * @param {ILinkedList<T>} list - Linked list
 * @param {number} index - Index of node to get
 * @return {OrNull<Node<T>>} Node at `index` or `null`
 */
function getLinkedListNode<T extends Val = Val>(
  list: ILinkedList<T>,
  index: number
): OrNull<Node<T>> {
  // If list is empty, or index is out of bounds, return null
  if (list.length === 0 || index < 0 || index >= list.length) return null

  /** @const {Node<T>[]} nodes - {@link list} nodes */
  const nodes: Node<T>[] = []

  /** @const {OrNull<Node<T>>} curr - Current node in {@link list} */
  let curr: OrNull<Node<T>> = list.head

  // Get nodes
  while (curr) {
    // Add current node to nodes
    nodes.push(curr)

    // Move onto next node
    curr = curr.next as Node<T>
  }

  return nodes[index]!
}

export default getLinkedListNode
