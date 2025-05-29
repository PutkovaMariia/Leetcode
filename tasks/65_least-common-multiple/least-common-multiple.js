/**
 * Greatest Common Divisor
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */

const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));

/**
 * Least Common Multiple
 *
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */

export const leastCommonMultiple = (num1, num2) => (num1 * num2) / greatestCommonDivisor(num1, num2);
