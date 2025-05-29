/**
 * Find the longest word in a string
 *
 * @param {String} str
 * @return {Number}
 */

export const findLongestWord = (str) =>
  str.split(' ').reduce((maxLength, current) => (maxLength > current.length ? maxLength : current.length), 0);
