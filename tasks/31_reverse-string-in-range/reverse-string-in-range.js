/**
 * Reverse string in range
 *
 * @param {String} str
 * @param {Array<Number>} arr
 * @return {String}
 */

export const reverseStringInRange = (str, [start, end]) => {
  const validEnd = Math.min(end, str.length - 1);
  const reversed = [...str.slice(start, validEnd + 1)].reverse().join('');

  return str.slice(0, start) + reversed + str.slice(validEnd + 1);
};
