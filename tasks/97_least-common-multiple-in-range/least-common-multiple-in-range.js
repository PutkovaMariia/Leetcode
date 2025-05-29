/**
 * Greatest Common Divisor
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));

/**
 * Least Common Multiple
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const leastCommonMultiple = (a, b) => (a * b) / greatestCommonDivisor(a, b);

/**
 * Least Common Multiple of all numbers
 *
 * @param {Array<Number>} arr
 * @returns {Number}
 */
const leastCommonMultipleAll = (arr) => arr.reduce(leastCommonMultiple, 1);

/**
 * Range of numbers from low to high
 *
 * @param {Number} low
 * @param {Number} high
 * @returns {Array<Number>}
 */
const range = (low, high) => [...Array(high - low + 1)].map((_, i) => low + i);

/**
 * Least common multiple in range
 *
 * @param {Array<Number>}
 * @returns {Number}
 */
export const leastCommonMultipleInRange = ([num1, num2]) => {
  let low = num1;
  let high = num2;
  if (low > high) {
    [low, high] = [high, low];
  }
  return leastCommonMultipleAll(range(low, high));
};
