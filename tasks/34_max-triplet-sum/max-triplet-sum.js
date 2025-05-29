/**
 * Maximum Triplet Sum
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export const maxTripletSum = (arr) =>
  [...new Set(arr)]
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b);
