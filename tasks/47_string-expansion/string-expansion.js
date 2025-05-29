/**
 * String Expansion
 *
 * @param {String} str
 * @return {String}
 */

export const stringExpansion = (str) => {
  let repeat = 0;
  return str
    .split('')
    .map((char) => {
      if (/\d/.test(char)) {
        repeat = Number(char);
        return '';
      }
      return repeat ? char.repeat(repeat) : char;
    })
    .join('');
};
