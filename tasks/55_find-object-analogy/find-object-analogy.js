/**
 * Find object analogy
 *
 * @param {Array<Object>} arr
 * @param {Object} prop
 * @return {Object || String}
 */

export const findObjectAnalogy = (arr, prop) => {
  const result = arr.filter((obj) => Object.entries(prop).every(([key, value]) => obj[key] === value));
  return result.length > 0 ? result : 'No match found';
};
