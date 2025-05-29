/**
 * Confirm ending
 *
 * @param {String} str
 * @param {String} targetStr
 * @return {Boolean}
 */

export const confirmEnding = (str, targetStr) => str.substring(str.length - targetStr.length, str.length) === targetStr;
