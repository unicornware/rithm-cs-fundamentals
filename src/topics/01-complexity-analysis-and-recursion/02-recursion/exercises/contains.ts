/**
 * @file Recursion Exercises - contains
 * @module csf/topics/recursion/exercises/contains
 */

import { JSONPrimitive, ObjectPlain } from '@flex-development/tutils'

/**
 * Given an object, `obj`, the function returns `true` if the object includes a
 * top-level or nested key with the value `value`.
 *
 * @example contains({ stuff: { thing: { more: { magic: 44 } } } }, 44) => true
 * @example contains({ data: { hello: 'world' }, foo: 2 }, 'foo') => false
 * @example contains({}, 'data') => false
 *
 * @param {ObjectPlain} obj - Object to search
 * @param {JSONPrimitive} value - Value to search for
 * @return {boolean} `true` if object includes value, `false` otherwise
 */
const contains = (obj: ObjectPlain, value: JSONPrimitive): boolean => {
  /** @const {any[]} values - {@link obj} values */
  let values: any[] = Object.values(obj)

  // Base case 1: If obj is empty, return false
  if (values.length === 0) return false

  /** @const {any[]} val - {@link obj} value */
  let val = values[0]

  // Base case 2: If val is a primitive or array, compare to value
  if (Array.isArray(val) || typeof val !== 'object') return val === value

  // Remove val from values
  values.shift()

  // val is an object => do recursive call to see if val contains value
  return contains(val as ObjectPlain, value)
}

export default contains
