/**
 * Fat Fingers
 *
 * @param {String} str
 * @return {String}
 */

export const fatFingers = (str) => {
  let result = '';
  let changeCase = false;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (/a/i.test(letter)) {
      changeCase = !changeCase;
    } else if (changeCase) {
      if (letter === letter.toUpperCase()) {
        result += letter.toLowerCase();
      } else {
        result += letter.toUpperCase();
      }
    } else {
      result += letter;
    }
  }
  return result;
};
