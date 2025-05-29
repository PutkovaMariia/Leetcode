/**
 * Complementary DNA - [strings, objects]
 *
 * @param {String} str
 * @return {String}
 */

const DNAPairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

export const complementaryDNA = (str) =>
  str
    ?.split('')
    .map((char) => DNAPairs[char])
    .join('');
