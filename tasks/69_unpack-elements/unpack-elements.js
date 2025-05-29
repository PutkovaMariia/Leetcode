/**
 * Unpack Elements
 *
 * @param {Array} arr
 * @return {Array}
 */

export const unpackElements = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const recursiveResult = unpackElements(arr[i]);
      result.push(...recursiveResult);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
