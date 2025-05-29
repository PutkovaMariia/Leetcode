const UNICODE_UPPERCASE_A = 65;
const UNICODE_UPPERCASE_N = 78;
const UNICODE_UPPERCASE_Z = 90;
const ROT_13_SHIFT = 13;

/**
 * ROT13
 *
 * @param {String} str
 * @return {String}
 */

export const rot13Encoder = (str) =>
  str
    .split('')
    .map((character) => {
      const code = character.charCodeAt(0);
      if (code < UNICODE_UPPERCASE_A || code > UNICODE_UPPERCASE_Z) {
        return String.fromCharCode(code);
      }
      if (code < UNICODE_UPPERCASE_N) {
        return String.fromCharCode(code + ROT_13_SHIFT);
      }
      return String.fromCharCode(code - ROT_13_SHIFT);
    })
    .join('');
