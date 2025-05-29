/**
 * Largest of Four
 *
 * @param {Array<Array<Number>>} arr
 * @return {Array<Number>}
 */

export const largestOfFour = (arr) => arr.map((subArr) => Math.max(...subArr));
