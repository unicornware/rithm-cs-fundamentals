# Singly Linked Lists

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/singly-linked-lists>

## Objectives

By the end of this chapter, be able to:

- Compare and contrast arrays and singly linked lists
- Diagram inserting and removing from a singly linked list
- Implement insertion, removal, pushing, popping, finding, and accessing an
  element using a singly linked list

## Linked Lists vs Arrays

- Linked List: Ordered list of data, just like an array
  - The difference between the two is how they are stored in memory
  - **Linked lists are not stored in memory contiguously**. Instead, a they
    store the data for a particular index as well as a pointer to the next
    element in the list
- A linked list can store values in any order, provided each memory address
  contains not only a value, but also a pointer to the memory address containing
  the next value

## Advantages & Disadvantages

- Advantage: `O(1)` `shift`, `unshift`, and `push` operations
  - Since a linked list is not stored contiguously, each node only takes up one
    memory slot at a time => operations like `shift` are always `O(1)`
  - If a `tail` reference is kept, `push` operations are `O(1)` as well
- Disadvantage: `O(n)` element access
  - Because linked lists are not stored contiguously, and there typically a
    maximum of two node references (`head` and `tail`), finding an element at a
    specific index requires iterating through the list until that node is found

## Vocabulary

- Node: An element in a linked list
- Head: The first node in a linked list
- Tail: The last node in a linked list
- Next: Pointer referring to the next node in the list
- Previous: In a doubly linked list, the pointer referring to the previous node
  in the list

## The Singly Linked List

- Singly Linked List: A linked list with a `head` node, optional `tail` node,
  and where each node only has a `next` pointer

  <figure
    style="align-items:flex-start;display:flex;flex-direction:column;justify-content:center"
  >
    <img
      src="singly-linked-list.png"
      style="background-color:white;margin-bottom:2rem"
    />

    <figcaption>
      Each node appears in sequential order in the diagram, but in reality the nodes
      are scattered all over memory (as we learned earlier). The arrow from one node
      to the next is a pointer that holds a reference to the next element
    </figcaption>
  </figure>

- Drawbacks
  - [Element access](#advantages--disadvantages)
  - `pop` operations are `O(n)` because finding the last element requires
    iterating through the entire list
    - Runtime could be improved by using a doubly linked list

## References

- [JavaScript Algorithms and Data Structures - Linked List][1]

[1]:
  https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
