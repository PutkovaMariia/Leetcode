/**
 * Binary Decode
 *
 * @param {String} codeBinary
 * @return {String}
 */

export const binaryDecode = (codeBinary = '') =>
  codeBinary
    .split(' ')
    .map((code) => String.fromCharCode(parseInt(code, 2)))
    .join('');
