# Recursion Exercise

See:
<https://github.com/unicornware/javascript_computer_science_exercises/tree/master/recursion_exercise>

## Getting Started

For these exercises, you **MUST** use recursion. Some of them can be done
without, but it is essential that you practice recursion and make the tests
pass.

1. Write a function called `productOfArray` which takes in an array of numbers
   and returns the product of them all

   ```javascript
   productOfArray([1, 2, 3]) // 6
   productOfArray([1, 2, 3, 10]) // 60
   ```

2. Write a function called `contains` that searches for a value in a nested
   object. It returns `true` if the object contains that value

   ```javascript
   var nestedObject = {
     data: {
       info: {
         stuff: {
           thing: {
             moreStuff: {
               magicNumber: 44
             }
           }
         }
       }
     }
   }

   contains(nestedObject, 44) // true
   contains(nestedObject, 'foo') // false
   ```

3. Complete the following CodeWars problems:

   - <https://codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript>
   - <https://codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript>
   - <https://codewars.com/kata/recursive-replication/train/javascript>

## Bonus

1. Write a function called `search` that finds a value in an array and returns
   the index where the value is at. If the value is not found, the function
   should return `-1`

   ```javascript
   search([1, 2, 3, 4, 5], 5) // 4
   search([1, 2, 3, 4, 5], 15) // -1
   ```

2. Refactor your `search` function to use binary search

   ```javascript
   binarySearch([1, 2, 3, 4, 5], 5) // 4
   binarySearch([1, 2, 3, 4, 5], 15) // -1
   ```

   See: [How Binary Search Works](https://youtube.com/watch?v=JQhciTuD3E8)

3. Write a function called `stringifyNumbers` which takes in an object and finds
   all of the values which are numbers and converts them to strings

   ```javascript
   var obj = {
     num: 1,
     test: [],
     data: {
       val: 4,
       info: {
         isRight: true,
         random: 66
       }
     }
   }
   stringifyNumbers()
   /*/
    {
      num: "1",
      test: [],
      data: { val: "4",  info: { isRight: true, random: "66" } }
    }
    /*/
   ```

4. Complete the following CodeWars problem:

   - <https://codewars.com/kata/mutual-recursion/train/javascript>
