/**
 * Convert numbers to reversed array of digits
 *
 * @param {Number} num
 * @return {Array<Number>}
 */

export const numbersToReversedArray = (num) => String(num).split('').reverse().map(Number);
