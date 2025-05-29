/**
 * Search and Replace
 *
 * @param {String} str
 * @param {String} wordToReplace
 * @param {String} wordToInsert
 * @return {String}
 */

export const searchAndReplace = (str, wordToReplace, wordToInsert) =>
  str
    .split(' ')
    .map((word) => {
      if (word.toLowerCase() === wordToReplace.toLowerCase()) {
        return word[0] === word[0].toUpperCase() ? wordToInsert[0].toUpperCase() + wordToInsert.slice(1) : wordToInsert;
      }
      return word;
    })
    .join(' ');
