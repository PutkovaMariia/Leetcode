/**
 * Add element in the end of array and return one that was removed from the beginning
 *
 * @param {Array<Number>} arr
 * @param {Number} num
 * @return {*}
 */

export const nextInLine = (arr, num) => {
  arr.push(num);
  return arr.shift();
};
