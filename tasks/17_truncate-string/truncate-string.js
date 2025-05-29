/**
 * Truncate string
 *
 * @param {String} str
 * @param {Number} maxLength
 * @return {String}
 */

export const truncateString = (str, maxLength) => {
  if (maxLength >= str.length) {
    return str;
  }
  return maxLength <= 3 ? `${str.slice(0, maxLength)}...` : `${str.slice(0, maxLength - 3)}...`;
};
