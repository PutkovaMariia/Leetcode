/**
 * Sum all numbers in range
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export const sumAllNumbersInRange = ([a, b]) => ((Math.abs(a - b) + 1) * (a + b)) / 2;
