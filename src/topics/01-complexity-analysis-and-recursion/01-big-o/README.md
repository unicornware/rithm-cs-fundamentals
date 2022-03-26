# Introduction to Big O Notation

See:
<https://rithmschool.com/courses/javascript-computer-science-fundamentals/introduction-to-big-o-notation>

## Objectives

By the end of this chapter, be able to:

- Describe big-O notation
- Evaluate the runtime of algorithms using big-O notation
- Compare fastest to slowest asymptotic complexities of common runtimes
  - e.g. `O(1)`, `O(log(n))`, `O(n)`, `O(nlog(n))`,
    <code>O(n<sup>2</sup>)</code>, etc
- Explain the difference between **time complexity** and **space complexity**

## Background

- Concept borrowed from mathematics
- Way of measuring performance of an algorithm relative to number of inputs
  given to the algorithm

## Runtimes

### Common Time Complexities of Algorithms

| Big O Runtime                 | Name      | Example                                                                                                                |
| ----------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `O(1)`                        | Constant  | Print the first string in an array of length `n`                                                                       |
| `O(n)`                        | Linear    | Print every string in an array of length `n`                                                                           |
| <code>O(n<sup>2</sup>)</code> | Quadratic | Print every character of every string in an array of length `n` <br/> (Assume that every string is also of length `n`) |

#### `O(1)`

- Not dependent on a variable size data set
- Regardless of input size, runtime of the algorithm will not grow beyond some
  constant size

```javascript
function add(num1, num2, num3) {
  return num1 + num2 + num3
}

function sayHello() {
  for (var i = 0; i < 100; i++) {
    console.log('Hello')
  }
}
```

#### `O(n)`

- Runtime is roughly proportional to input size

```javascript
function sayHello(numberOfTimes) {
  for (var i = 0; i < numberOfTimes; i++) {
    console.log('Hello')
  }
}
// unlike the previous `sayHello` function, this function takes one argument
// the argument controls how many times 'Hello' gets logged to the console
```

```javascript
function doubleThenTriple(numbers) {
  var doubled = numbers.map(function (num) {
    return num * 2
  })

  return doubled.map(function (num) {
    return num * 3
  })
}

// we map over the data set twice, so you could say the runtime is O(n + n) or O(2n)
// however, in big O notation, constants are ignored, so O(2n) === O(n)
```

#### <code>O(n<sup>2</sup>)</code>

```javascript
function allPairs(arr) {
  var pairs = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]])
    }
  }

  return pairs
}

function bubbleSort(arr) {
  var len = arr.length
  var lastSwap
  var temp
  while (len != 0) {
    lastSwap = 0
    for (var i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap the two elements
        temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
        lastSwap = i
      }
    }
    len = lastSwap
  }
}
```

#### Nested Loops

- General rule of thumb: <code>O(n<sup>levels of nesting</sup>)</code>
  - function with a single `for` loop will be `O(n)`
  - function with a loop inside of a loop will be <code>O(n<sup>2</sup>)</code>
  - function with a loop inside of a loop inside of a loop will be
    <code>O(n<sup>3</sup>)</code>, and so on
- General rule of thumb doesn't always apply

  ```javascript
  function logSomeMultiples(n) {
    for (var num1 = 1; num1 < n=; num1++) {
      for (var num2 = 1; num2 <= Math.min(n, 10); num2++) {
        console.log(num1 * num2);
      }
    }
  }

  // the runtime of the inner loop is not proportional to `n`
  // inner loop runs a maximum of 10 times => O(1) operation
  // outer loop, which is still O(n), performs O(1) operation for each value of `num1`
  // therefore, `logSomeMultiples` is O(n), not O(n^2)
  ```

### Average Case, Best Case, and Worst Case

- Average Case: What we would expect the algorithm to do with a typical data set
- Best Case: Given a special assumption about input, minimum possible runtime
- Worst Case: Given a special assumption about input, maximum possible runtime

### Compound Runtimes

- Different runtimes in sequence
- Most Significant Term: Term with the largest [degree][1]
- When simplifying a compound runtime, only keep the most significant term

```javascript
function compoundRuntimes(arr) {
  for (let i = 0; i < 1000; i++) {
    console.log('Hi')
  }

  for (let num of arr) {
    console.log(num)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        console.log("It's a match!")
      }
    }
  }
}
// compound rutime: O(1) + O(n) + O(n^2)
// simplified runtime: O(n^2)
```

### Ranking and Visualizing Runtimes

Fastest to slowest: <code>O(1) < O(log(n)) < O(n) < O(nlog(n)) <
O(n<sup>2</sup>) < O(2n) < O(n!)</code>

![[http://bigocheatsheet.com](http://bigocheatsheet.com)](big-o-complexity-chart.png)

See: <http://bigocheatsheet.com>

## Time & Space

- **Time Complexity**: How long does it take an algorithm to run when
  given `n` elements as input?
- **Space Complexity**: How much memory does an algorithm need when
  given `n` elements as input?
- **Auxiliary Space Complexity**: How much additional memory does the algorithm
  require beyond what needs to be allocated for the inputs themselves?

```javascript
function total(array) {
  var total = 0
  for (var i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

// `total` takes one input; let `n` denote the length of `array`
// time complexity: O(n) => looping through `array` once and adding to `var total`
// space complexity: O(1) => requires 1 extra unit of space (`var total`)
```

```javascript
function double(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray.push(2 * array[i])
  }
  return newArray
}
// `double` takes one input; let `n` denote the length of `array`
// time complexity: O(n) => looping through `array` once and pushing into `newArray`
// space complexity: O(n) => length of `newArray`, equal to `n`
```

## Additional Resources

- [Pursuit Core Data Structures and Algorithms - Big O Notation][2]

[1]: https://en.wikipedia.org/wiki/Degree_of_a_polynomial
[2]:
  https://github.com/unicornware/Pursuit-Core-DSA/blob/master/lessons/big_o_notation/web/README.md
