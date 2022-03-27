# Searching Algorithms

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/searching>

## Objectives

By the end of this chapter, be able to:

- Implement linear search
- Define divide and conquer algorithms
- Implement binary search

## Linear Searching Algorithms

- Simplest way of searching
- Traverses an array or list until an element is or is not found
- Runtime: `O(n)`

## Divide and Conquer Algorithms and Binary Search

- Divide and conquer algorithm: Algorithm design paradigm that solves a large
  problem by:
  1. breaking the problem into smaller sub-problems
  2. solving the sub-problems, and
  3. combining them to get the desired output
- Assuming an extra condition about a data set may improve efficiency
  - e.g: searching through a **sorted** array or list using **binary search**

### Binary Search

- Divide and conquer algorithm
  - At each step, the size of the data set is reduced by half
- Can only be used on a **sorted** array or list
- Runtime: `O(log(n))`
  - Significantly faster than `O(n)` for a large data set

## References

- [CS50 - Binary Search][1]
- [CS50 - Linear Search][2]

[1]: https://youtube.com/watch?v=5xlIPT1FRcA
[2]: https://youtube.com/watch?v=vZWfKBdSgXI
