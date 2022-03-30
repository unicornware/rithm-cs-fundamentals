# Basic Sorting Algorithms

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms>

## Objectives

By the end of this chapter, be able to:

- Define and implement simpler sorting algorithms like bubble, insertion, and
  selection sort
- Understand the runtimes and limitations of bubble, insertion, and selection
  sort

## Bubble Sort

- Algorithm

  1. For each element in the array, compare it to the next element
  2. If the element is greater than the value on the right, swap the two values
  3. Continue to swap until the end of the array is reached
     - At this point the rightmost element will be in its correct place
  4. Start at the beginning of the array and repeat process
     - Since the rightmost element from the last iteration is now sorted, this
       process will terminate earlier and earlier each time it is repeated

- Runtime

  - Average / Worst Case: <code>O(n<sup>2</sup>)</code>
    - Nesting of loops: At each iteration, a subarray of the original array is
      iterated over
  - Best Case: `O(n)`
    - Only one complete iteration will be necessary

<div style="align-items:center;display:flex;justify-content:center">
  <img src="bubble-sort.gif" style="margin-bottom:2rem" />
</div>

For more info, see: [CS50 - Bubble Sort][1]

## Insertion Sort

- Algorithm

  1. Start by picking the second element in the array (assume the first element
     is the start of the "sorted" portion)
  2. Compare the second element with the one before it and swap if necessary
  3. Continue to next element; if it's the wrong position, iterate through the
     sorted portion to position the element correctly
  4. Repeat until the array is sorted

- Runtime

  - Average / Worst Case: <code>O(n<sup>2</sup>)</code>
    - For each element in the array, iterate through the array to find the
      element's proper position
  - Best Case: `O(n)`
    - Only one complete iteration will be necessary

<div style="align-items:center;display:flex;justify-content:center">
  <img src="insertion-sort.gif" style="margin-bottom:2rem" />
</div>

## Selection Sort

- Algorithm

  1. Assign the first element to be the smallest value (minimum)
     - Does **not** matter (right now) if the first element is the true minimum
  2. Compare the item to the next array item until a smaller value is found
  3. If a smaller value is found, reassign the minimum to the smaller value and
     continue until the end of the array
  4. If the minimum is not the index of the element initially started with, swap
     the two values
     - The beginning of the array is now in the correct order (similar to how
       after the first iteration of bubble sort, the rightmost element is in its
       correct place)
  5. Repeat with the next element until the array is sorted

- Runtime

  - Average / Worst Case: <code>O(n<sup>2</sup>)</code>
  - Best Case: <code>O(n<sup>2</sup>)</code>

<div style="align-items:center;display:flex;justify-content:center">
  <img src="selection-sort.gif" style="margin-bottom:2rem" />
</div>

For more info, see: [CS50 - Selection Sort][3]

[1]: https://youtube.com/watch?v=8Kp-8OGwphY
[2]: https://youtube.com/watch?v=DFG-XuyPYUQ
[3]: https://youtube.com/watch?v=f8hXR_Hvybo
