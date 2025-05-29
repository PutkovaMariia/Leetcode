/**
 * Spinal Case
 *
 * @param {String} str
 * @return {String}
 */

export const spinalCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
