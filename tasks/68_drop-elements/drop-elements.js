/**
 * Drop Elements
 *
 * @param {Array} arr
 * @param {Function} func
 * @return {Array}
 */

export const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
};
