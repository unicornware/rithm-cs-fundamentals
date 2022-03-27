# Big O Notation Exercise

See:
<https://github.com/unicornware/javascript_computer_science_exercises/tree/master/big_o_exercise>

## Part 1

Simplify the following expressions as much as possible:

| original                                                                       | simplified                    |
| ------------------------------------------------------------------------------ | ----------------------------- |
| <code>O(n + 10)</code>                                                         | <code>O(n)</code>             |
| <code>O(100 \* n)</code>                                                       | <code>O(n)</code>             |
| <code>O(25)</code>                                                             | <code>O(1)</code>             |
| <code>O(n<sup>2</sup> + n<sup>3</sup>)</code>                                  | <code>O(n<sup>3</sup>)</code> |
| <code>O(n + n + n + n)</code>                                                  | <code>O(n)</code>             |
| <code>O(1000 \* log(n) + n)</code>                                             | <code>O(log(n))</code>        |
| <code>O(1000 \* n \* log(n) + n)</code>                                        | <code>O(nlog(n))</code>       |
| <code>O(2<sup>n</sup> + n<sup>2</sup>)</code>                                  | <code>O(2<sup>n</sup>)</code> |
| <code>O(5 + 3 + 1)</code>                                                      | <code>O(1)</code>             |
| <code>O(n + n<sup>1/2</sup> + n<sup>2</sup> + n \* log(n)<sup>10</sup>)</code> | <code>O(nlog(n))</code>       |

## Part 2

Determine the time and space complexities for each of the following functions.

```javascript
/**
 * Calls `console.log` up to `n` times.
 *
 * SPACE COMPLEXITY: `O(1)`
 * TIME COMPLEXITY: `O(n)`
 *
 * @param {number} n - Maximum number of calls
 */
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i)
  }
}
```

```javascript
/**
 * Calls `console.log` `n` times if `n` is less than or equal to `10`.
 *
 * Otherwise, `console.log` will be called **no more than** `10` times.
 *
 * SPACE COMPLEXITY: `O(1)`
 * TIME COMPLEXITY: `O(1)`
 *
 * @param {number} n - Number of calls
 */
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i)
  }
}
```

```javascript
/**
 * Calls `console.log` `n` times if `n` is greater than or equal to `10`.
 *
 * Otherwise, `console.log` will be called **at least** `10` times.
 *
 * SPACE COMPLEXITY: `O(1)`
 * TIME COMPLEXITY: `O(n)`
 *
 * @param {number} n - Number of calls
 */
function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i)
  }
}
```

```javascript
/**
 * Returns a new array consisting of the values at even indices in `array`.
 *
 * SPACE COMPLEXITY: `O(n)`
 * TIME COMPLEXITY: `O(n)`
 *
 * @param {number[]} array - Source array
 * @return {number[]} Array containing values at even indices in `array`
 */
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2))
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i]
    }
  }
  return newArray
}
```

```javascript
/**
 * Returns an array containing the cumulative subtotal at each index in `array`.
 *
 * SPACE COMPLEXITY: `O(n)`
 * TIME COMPLEXITY: `O(n^2)`
 *
 * @param {number[]} array - Subtotals arrays
 * @return {number[]} Array containing cumulative subtotal at each index
 */
function subtotals(array) {
  var subtotalArray = Array(array.length)
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0
    for (var j = 0; j <= i; j++) {
      subtotal += array[j]
    }
    subtotalArray[i] = subtotal
  }
  return subtotalArray
}
```
