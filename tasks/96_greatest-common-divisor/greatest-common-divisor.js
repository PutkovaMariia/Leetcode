/**
 * Greatest Common Divisor
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */

export const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));
