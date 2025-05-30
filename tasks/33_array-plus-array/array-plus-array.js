/**
 * Array plus Array
 *
 * @param {Array<Number>} arr1
 * @param {Array<Number>} arr2
 * @return {Array<Number>}
 */

export const arrayPlusArray = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return result;
};
