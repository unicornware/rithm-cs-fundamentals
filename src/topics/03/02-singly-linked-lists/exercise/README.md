# Singly Linked Lists Exercise

See:
<https://github.com/unicornware/javascript_computer_science_exercises/tree/master/singly_linked_lists_exercise>

## Part 1

Given the following constructor functions:

```javascript
function Node(val) {
  this.val = val
  this.next = null
}

function SinglyLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}
```

implement the the `SinglyLinkedList.prototype`.

### `get`

This internal/helper function should search for a node at the specified index in
the `SinglyLinkedList`.

It should return the found node.

### `insert`

This internal/helper function should insert a node at a specified index in the
`SinglyLinkedList`.

It should return the new length of the list.

### `pop`

This function should remove the node at the end of the `SinglyLinkedList`.

It should return the node removed.

### `push`

This function should add a node to the end of the `SinglyLinkedList`.

It should return the list so that the method can be chained.

### `remove`

This function should remove the node at the specified index.

It should return the removed node.

### `reverse`

This function should reverse all of the nodes in the `SinglyLinkedList`.

It should return the reversed list.

### `set`

This function should update the value of a node at a given index.

It should return `true` if the node is updated successfully, or `false` if an
invalid index is passed in.

### `shift`

This function should remove a node at the beginning of the `SinglyLinkedList`.

It should return the node removed.

### `unshift`

This function should add a node to the beginning of the `SinglyLinkedList`.

It should return the list so that the method can be chained.
