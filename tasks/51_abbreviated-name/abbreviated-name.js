/**
 * Abbreviated name
 *
 * @param {String} str
 * @return {String}
 */

export const abbreviatedName = (str) =>
  str
    .split(' ')
    .map((word, index) => (index === 0 ? word : `${word[0]}.`))
    .join(' ');
