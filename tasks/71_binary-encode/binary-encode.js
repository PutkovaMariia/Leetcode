/**
 * Binary Encode
 *
 * @param {String} text
 * @return {String}
 */

export const binaryEncode = (text = '') =>
  text
    .split('')
    .map((letter) => letter.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
