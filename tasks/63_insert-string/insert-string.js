/**
 * Insert a string
 *
 * @param {String} strInput
 * @param {String} strInsert
 * @param {Number} indexInsert
 * @return {String}
 */

export const insertString = (strInput, strInsert, indexInsert = 0) => {
  if (!strInsert) {
    return strInput;
  }
  return `${strInput.slice(0, indexInsert)}${strInsert}${strInput.slice(indexInsert)}`;
};
