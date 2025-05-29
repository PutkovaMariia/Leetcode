/**
 * Vowel count
 *
 * @param {String} str
 * @return {Number}
 */

export const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((char) => vowels.includes(char)).length;
};
