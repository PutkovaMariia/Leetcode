/**
 * Added Characters
 *
 * @param {String} str1
 * @param {String} str2
 * @return {String}
 */

export const addedCharacters = (str1, str2) => {
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    const count1 = (str1.match(new RegExp(char, 'g')) || []).length;
    const count2 = (str2.match(new RegExp(char, 'g')) || []).length;

    if (count1 !== count2) {
      return char;
    }
  }
  return null;
};
