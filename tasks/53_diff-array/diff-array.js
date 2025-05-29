/**
 * Diff 2 arrays
 *
 * @param {Array<*>} arr1
 * @param {Array<*>} arr2
 * @return {Array<*>}
 */

export const diffArray = (arr1, arr2) => [
  ...arr1.filter((item) => !arr2.includes(item)),
  ...arr2.filter((item) => !arr1.includes(item))
];
