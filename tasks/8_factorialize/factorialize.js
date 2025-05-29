/**
 * Factorize number
 *
 * @param {Number} num
 * @return {Number}
 */

export const factorialize = (num) => (num === 0 ? 1 : num * factorialize(num - 1));
