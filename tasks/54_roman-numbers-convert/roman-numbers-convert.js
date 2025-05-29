/**
 * Roman numbers converter
 *
 * @param {Number} num
 * @return {String}
 */

const ROMAN_NUMBERS = Object.entries({
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
});

export const romanNumbersConvert = (num) => {
  let input = num;
  return ROMAN_NUMBERS.reduce((result, [roman, value]) => {
    const count = Math.floor(input / value);
    input %= value;
    return result + roman.repeat(count);
  }, '');
};
