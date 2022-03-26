# Dynamic Programming

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/dynamic-programming>

## Objectives

By the end of this chapter, be able to:

- Define dynamic programming
- Solve Fibonacci sequence using dynamic programming
- Solve the largest common subsequence problem

## What is Dynamic Programming?

- Useful problem solving technique that can make programs more efficient
- Solve smaller and smaller and _remember_ the result of those smaller problems
  in case they're encountered again. By remembering solutions to smaller
  problems, the solutions to larger programs can be found quickly

## Memoization vs. Tabulation

- Memoization: Storing the result of an expensive function
  - Implemented by maintaining a lookup table of previous solved sub-problems
  - Known as a "top down" approach => "top" problem is solved first (which
    typically recurses down to solve sub-problems)
- Tabulation: Solving all related sub-problems first
  - Must decide the order in which to solve sub-problems
  - Known as a "bottom up" approach => sub-problems are calculated first

For more info, see:

- [Tabulation and Memoization][1]
- [What is the difference between bottom-up and top-down?][2]

## Fibonacci With Dynamic Programming

**Problem**: Naive Fibonacci sequence implementations recompute two values of
the sequence that already been computed.  
**Solution**: Use dynamic programming to save values in a hash so that values
are not recomputed.

### Fibonacci With Naive Implementation

```javascript
function fib(n) {
  if (n <= 0) return 0

  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}
```

### Fibonacci With Memoization

```javascript
function fib(n, savedFib = {}) {
  // base case
  if (n <= 0) return 0

  if (n <= 2) return 1

  // memoize
  if (savedFib[n - 1] === undefined) {
    savedFib[n - 1] = fib(n - 1, savedFib)
  }

  // memoize
  if (savedFib[n - 2] === undefined) {
    savedFib[n - 2] = fib(n - 2, savedFib)
  }

  return savedFib[n - 1] + savedFib[n - 2]
}
```

### Fibonacci With Tabulation

```javascript
function fib(n) {
  // figure out how many items are needed before calculations begin
  // then make a new array and fill it with 0s
  var arr = new Array(n + 1).fill(0)

  // base case assignment
  arr[1] = 1

  // calculating the fibonacci and storing the values
  for (var i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}
```

## Other Dynamic Programming Problems

- [Change Making][3]
- [Knapsack][4]
- [Longest Common Subsequence][5]

## References

- [CSBreakdown - Dynamic Programming Introduction][6]
- [CSBreakdown - Principle of Optimality][7]
- [Change Making Problem Videos][8]
- [Knapsack Problem Video][9]
- [MIT OpenCourseWare - Dynamic Programming I: Fibonacci, Shortest Paths][10]
- [Top Coder - Dynamic Programming][11]

[1]: https://awjin.me/algos-js/dp/tab-memo.html
[2]:
  https://stackoverflow.com/questions/6164629/what-is-the-difference-between-bottom-up-and-top-down
[3]: https://en.wikipedia.org/wiki/Change-making_problem
[4]: https://en.wikipedia.org/wiki/Knapsack_problem
[5]: https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
[6]: https://youtube.com/watch?v=W2ote4jCuYw
[7]: https://youtube.com/watch?v=_zE5z-KZGRw
[8]: https://youtube.com/watch?v=rdI94aW6IWw
[9]:
  https://youtube.com/watch?v=8LusJS5-AGo&list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr
[10]:
  https://youtube.com/watch?v=OQ5jsbhAv_M&list=PLfMspJ0TLR5HRFu2kLh3U4mvStMO8QURm
[11]:
  https://topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/
