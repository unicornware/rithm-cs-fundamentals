# Introduction to Recursion

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-recursion>

## Objectives

By the end of this chapter, be able to:

- Define what recursion is and explain the advantages / disadvantages to using
  recursion over iteration
- Ensure all recursive functions have base cases to prevent the call stack from
  being exceeded
- Refactor iterative functions into recursive functions

## What is recursion?

- Recursive function: A function that calls itself

## Why use recursion?

- Alternative to iteration; in many cases it can be more elegant, thus resulting
  in **less code and improved readability**
- At times, recursion **can be more useful** than iteration

  - Imagine we have an object and we're trying to figure out if a certain value
    exists. We could loop through all the object keys, but what happens when the
    value of a key is another object? What happens when we have something like
    this?:

    ```javascript
    var obj = {
      data: {
        info: {
          innerData: {
            moreInfo: {
              name: 'Bob'
            }
          }
        }
      }
    }
    ```

    We would need to loop over the `obj` variable and the `data`, `info`,
    `innerData` and `moreInfo` keys. Instead of writing multiple loops, we could
    call our function again, but with a different parameter. This idea of
    invoking the same function again is **recursion**. With recursive functions,
    each recursive call is different (accepts different input).

## Always have a base case

- Base case: Terminating case in a recursive function that ends recursive calls
- Base cases are required to prevent the call stack from being exceeded
  - ex: `new RangeError('Maximum call stack size exceeded')`

## Visualize the call stack

- When debugging a recursive function, try to visualize the call stack
  - Every time a function is called again, it's added to the call stack
- Call stack is **LIFO** (**L**ast **I**n, **First** **O**ut) data structure
  - Last function pushed onto the stack will be the first one popped off

## Getting Started

Recursive functions that won't throw a `RangeError`:

```javascript
function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}
// base case: `if (num === 1) return 1`
```

```javascript
function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}
// base case: `if (exponent === 0) return 1`
```

## Scope in Recursion

- To help with scope, you can create a `wrapper` or `helper` function which will
  be called multiple times in an outer function
- Example: Start by writing a function called `all` which accepts an array and a
  callback and returns `true` if every value in the array returns `true` when
  passed as parameter to the callback function

### Iterative Solution

```javascript
function all(array, condition) {
  for (var i = 0; i < array.length; i++) {
    if (!condition(array[i])) {
      return false
    }
  }
  return true
}

all([1, 2, 3, 4], function (val) {
  return val > 0
}) // true

all(['1', '2', 3, '4'], function (val) {
  return typeof val === 'string'
}) // false
```

### Helper Method Recursion

Creating a `wrapper` or `helper` function that will be called multiple times in
an outer function (to provide additional scope):

```javascript
function allRecursive(array, condition) {
  var copy = array.slice()

  function allRecursiveHelper(arr, cb) {
    if (arr.length === 0) return true

    if (condition(arr[0])) {
      arr.shift()
      return allRecursive(arr, condition)
    } else {
      return false
    }
  }

  return allRecursiveHelper(copy, condition)
}

var numbersArray = [1, 2, 3, 4, 5]

allRecursive(numbersArray, function (v) {
  return v > 0
})
```

### Pure Recursion

Commonly implemented by passing in smaller and smaller parameters to each call:

```javascript
function allRecursive(array, condition) {
  var copy = copy || array.slice()

  if (copy.length === 0) return true

  if (condition(copy[0])) {
    copy.shift()
    return allRecursive(copy, condition)
  } else {
    return false
  }
}

var numbersArray = [1, 2, 3, 4, 5]

allRecursive(numbersArray, function (v) {
  return v > 0
})
```

## Additional Resources

- [Computerphile - What on Earth is Recursion?][1]
- [Fun Fun Function - Recursion][2]
- [The Modern JavaScript Tutorial - Recursion and stack][3]

[1]: https://youtube.com/watch?v=Mv9NEXX1VHc
[2]: https://youtube.com/watch?v=k7-N8R0-KY4
[3]: https://javascript.info/recursion
