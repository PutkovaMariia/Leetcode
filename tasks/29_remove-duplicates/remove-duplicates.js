/**
 * Remove duplicates
 *
 * @param {Array<Number>} arr
 * @return {Array<Number>}
 */

export const removeDuplicates = (arr) => [...new Set(arr)];
