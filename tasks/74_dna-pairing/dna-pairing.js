/**
 * DNA Pairing
 *
 * @param {String} str
 * @return {Array<String>}
 */

const DNAPairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

export const DNAPairing = (str) => str?.split('').map((char) => [char, DNAPairs[char]]);
