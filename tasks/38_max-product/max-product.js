/**
 * Maximum Product
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export const maxProduct = (arr) => Math.max(...arr.slice(0, -1).map((item, i) => item * arr[i + 1]));
