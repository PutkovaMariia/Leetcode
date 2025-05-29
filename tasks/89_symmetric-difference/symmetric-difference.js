/**
 * Symmetric Difference
 *
 * @param {Array} arrays
 * @return {Array<Number>}
 */

export const symmetricDifference = (...arrays) => {
  let result = arrays[0];

  for (let i = 1; i < arrays.length; i++) {
    const current = arrays[i];

    const resultCopy = [...result];
    const currentCopy = [...current];

    const uniqueToResult = resultCopy.filter((num) => !currentCopy.includes(num));
    const uniqueToCurrent = currentCopy.filter((num) => !resultCopy.includes(num));

    result = [...new Set([...uniqueToResult, ...uniqueToCurrent])];
  }

  return result.sort((a, b) => a - b);
};
