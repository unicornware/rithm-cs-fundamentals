# Intermediate Sorting Algorithms

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms>

## Objectives

By the end of this chapter, be able to:

- Define the limitations of simpler sorting algorithms like bubble, insertion,
  and selection sort
- Understand and implement merge sort
- Understand and implement quick sort
- Compare and contrast faster sorting algorithms like merge and quick sort

## Merge Sort

- Algorithm

  1. Break the array into halves until each value can be compared with another
  2. Sort smaller arrays, and merge those arrays with other sorted pairs
  3. Once the array has been merged back together, return the merged (and
     sorted!) array

- Runtime

  Once the array has been broken down into one-element subarrays, it takes
  `O(n)` comparisons to get two-element merged subarrays. From there, it takes
  `O(n)` comparisons to get four-element merged subarrays, and so on.

  In total it takes `O(log(n))` sets of `O(n)` comparisons, since the logarithm
  roughly measures how many times a number can be divided by 2 until a number
  that is 1 or less is reached.

  - Average / Worst Case: `O(log(n))`
  - Best Case: `O(log(n))`

- Typically implemented using helper method recursion
  - Helpful to first write a function that takes two sorted arrays and merges
    them together; after recursively calling itself on each half of an array,
    `mergeSort` uses the helper to merge the two sorted halves back together

<div style="align-items:center;display:flex;justify-content:center">
  <img src="merge-sort-algorithm-diagram.png" style="margin-right:1rem">
  <img src="merge-sort.gif" style="margin-bottom:2rem" />
</div>

## Quick Sort

- Algorithm

  1. Pick an element in the array and designate it as the "pivot"
     - There are a few options for choosing the pivot, but the simplest (and
       less optimal) choice is the first array element
  2. Compare every other element in the array to the pivot
     - If it's less than the pivot value, move it to the left of the pivot
     - If it's greater, move it to the right.
  3. After comparisons are finished, the pivot will be in the correct position
  4. Recursively call quicksort with the left and right halves from the pivot
     until the array is sorted

- Runtime

  - Average / Best Case: `O(log(n))`
  - Worst Case: <code>O(n<sup>2</sup>)</code>
    - e.g: If the pivot is chosen to be the leftmost element and the array is
      already sorted

- Typically implemented using helper method recursion
  - The helper function is responsible for taking an array, setting the pivot
    value, and mutating the array so that all values less than the pivot wind up
    to the left of it, and all values greater than the pivot wind up to the
    right of it. It's also helpful if the helper returns the index of where the
    pivot value winds up

<div style="align-items:center;display:flex;justify-content:center">
  <img src="quick-sort.gif" style="margin-bottom:2rem" />
</div>
