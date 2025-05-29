/**
 * Find element
 *
 * @param {Array} arr
 * @param {Function} func
 * @return {*}
 */

export const findElements = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};
