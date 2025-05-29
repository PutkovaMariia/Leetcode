/**
 * Title case
 *
 * @param {String} str
 * @return {String}
 */

export const titleCase = (str) =>
  str
    .toLowerCase()
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ''))
    .join(' ');
