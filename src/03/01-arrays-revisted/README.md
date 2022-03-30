# Arrays Revisited

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/arrays-revisited>

## Objectives

By the end of this chapter, be able to:

- Describe how an array is stored in memory
- Analyze the runtime of accessing an element with an index and array operations
  such as `find`, `pop`, `push`, and `splice`

## How Are Arrays Stored in Memory?

- Memory address: A piece of data's location a machine
- Arrays are stored in memory **_contiguously_**
  - Adjacent elements in the array have adjacent memory addresses
- All array access is constant time => `O(1)`
  - Looking up a value at an index is doing simple math with memory addresses
    - e.g: `arr[0]`, `arr[4]`

## How Do Arrays Grow?

- When memory is allocated to store an array, it is often stored on the heap
- When an array is created, the JavaScript interpreter must decide how large to
  make the array's **_contiguous_** space in memory
- Allocating more memory
  1. Interpreter allocates more contiguous space
  2. Interpreter copies every element of the array to the new memory addresses
  3. Interpreter pushes new element into array
- `push` operations can be `O(n)` if available space in memory runs out
  - Runtime also referred to as `amortized O(1)` => JavaScript sets aside a
    certain amount of space when the array is created so that up to a certain
    point the `push` operation will be constant. But if the available space in
    memory is exhausted, the entire array will need to be copied somewhere else

## Big O Runtime of Common Operations

| Operation          | Runtime |
| ------------------ | ------- |
| `arr[i]`           | `O(1)`  |
| `find`             | `O(n)`  |
| `pop`              | `O(1)`  |
| `push` / `unshift` | `O(n)`  |
| `splice`           | `O(n)`  |

- `find` is `O(n)` because worst case, all elements in the array must be
  iterated over to find the search element
- `splice` is `O(n)` because an array's space in memory must remain contiguous,
  so if an element is removed, all elements after it must be shifted down `1`,
  which is an `O(n)` operation
