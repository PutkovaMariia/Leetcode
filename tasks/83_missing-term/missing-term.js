/**
 * Find the missing term in an Arithmetic Progression
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export const missingTerm = (arr) => {
  const gap = (arr[arr.length - 1] - arr[0]) / arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== gap) {
      return arr[i] + gap;
    }
  }
  return null;
};
