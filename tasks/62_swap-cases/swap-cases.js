/**
 * Swap cases
 *
 * @param {String} str
 * @return {String}
 */

export const swapCases = (str) =>
  str
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
