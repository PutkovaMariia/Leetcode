/**
 * Check for Palindromes
 *
 * @param {String} str
 * @return {Boolean}
 */

export const checkForPalindromes = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  const cleanStr = str.toLowerCase().replace(/[\W_]+/g, '');
  return cleanStr === [...cleanStr].reverse().join('');
};
